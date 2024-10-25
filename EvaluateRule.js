import React, { useState } from 'react';
import axios from 'axios';

function EvaluateRule() {
  const [userData, setUserData] = useState({
    age: '',
    department: '',
    salary: '',
    experience: ''
  });
  const [result, setResult] = useState('');

  const handleEvaluate = async () => {
    const ruleId = "replace-with-rule-id"; 
    try {
      const response = await axios.post('http://localhost:5000/api/rules/evaluate', { ruleId, userData });
      setResult(response.data.result ? 'User is eligible' : 'User is not eligible');
    } catch (error) {
      setResult('Evaluation failed');
    }
  };

  return (
    <div>
      <h2>Evaluate Rule</h2>
      <div>
        <input
          type="number"
          placeholder="Age"
          value={userData.age}
          onChange={(e) => setUserData({ ...userData, age: parseInt(e.target.value) || '' })}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Department"
          value={userData.department}
          onChange={(e) => setUserData({ ...userData, department: e.target.value })}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Salary"
          value={userData.salary}
          onChange={(e) => setUserData({ ...userData, salary: parseFloat(e.target.value) || '' })}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Experience (in years)"
          value={userData.experience}
          onChange={(e) => setUserData({ ...userData, experience: parseInt(e.target.value) || '' })}
        />
      </div>
      <button onClick={handleEvaluate}>Evaluate Rule</button>
      {result && <p>{result}</p>}
    </div>
  );
}

export default EvaluateRule;
