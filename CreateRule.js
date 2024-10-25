import React, { useState } from 'react';
import axios from 'axios';

function CreateRule() {
  const [ruleString, setRuleString] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/rules/create', { ruleString });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error creating rule');
    }
  };

  return (
    <div>
      <h2>Create Rule</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ruleString}
          onChange={(e) => setRuleString(e.target.value)}
          placeholder="Enter rule string"
        />
        <button type="submit">Create Rule</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CreateRule;
