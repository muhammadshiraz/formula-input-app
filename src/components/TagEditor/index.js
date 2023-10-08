import React, { useState } from 'react';
import './TagEditor.css'; // Import custom CSS for styling

const TagEditor = () => {
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState('');
  const financialSaasSuggestions = [
    'Accounting Software',
    'Billing System',
    'Subscription Management',
    'Invoice Generation',
    'Financial Analytics',
    'Revenue Recognition',
    'Expense Tracking',
    'Payment Gateway Integration',
    'Financial Reporting',
    'Tax Compliance'
  ];

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleTagAdd = (tag) => {
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
      setInput('');
    }
  };

  const handleTagDelete = (index) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };

  return (
    <>
      <h1>Financial Tag Editor</h1>
      <div className="tag-editor">      
        <div className="tags-container">        
          {tags.map((tag, index) => (
            <div key={index} className="tag">
              {tag} <button onClick={() => handleTagDelete(index)}>(x)</button>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Add financial tags"
            list="saasSuggestions"
          />
          <datalist id="saasSuggestions">
            {financialSaasSuggestions.map((tag, index) => (
              <option key={index} value={tag} />
            ))}
          </datalist>
          <button className="add-button" onClick={() => handleTagAdd(input)}>Add Tag</button>
        </div>
      </div>
    </>
  );
};

export default TagEditor;
