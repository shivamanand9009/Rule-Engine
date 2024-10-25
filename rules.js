const express = require('express');
const router = express.Router();
const Rule = require('../models/rule');
const jsep = require('jsep');


router.post('/create', (req, res) => {
  const { ruleString } = req.body;
  try {
    const ast = jsep(ruleString); 
    const newRule = new Rule({ ruleString, ast });
    newRule.save()
      .then(() => res.status(200).json({ message: 'Rule created successfully', ast }))
      .catch(err => res.status(500).json({ error: 'Error saving rule' }));
  } catch (error) {
    res.status(400).json({ error: 'Invalid rule syntax' });
  }
});

router.post('/evaluate', async (req, res) => {
  const { ruleId, userData } = req.body;
  try {
    const rule = await Rule.findById(ruleId);
    const ast = rule.ast;

    const evaluateAST = (node, data) => {
      if (node.type === 'BinaryExpression') {
        const left = evaluateAST(node.left, data);
        const right = evaluateAST(node.right, data);
        switch (node.operator) {
          case '>': return left > right;
          case '<': return left < right;
          case '==': return left == right;
          case '&&': return left && right;
          case '||': return left || right;
          default: return false;
        }
      } else if (node.type === 'Identifier') {
        return data[node.name];
      } else if (node.type === 'Literal') {
        return node.value;
      }
    };

    const result = evaluateAST(ast, userData);
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ error: 'Evaluation failed' });
  }
});

module.exports = router;
