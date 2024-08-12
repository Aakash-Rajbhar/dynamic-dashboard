import React, { useState } from 'react';
import './AddWidgetForm.css';

const AddWidgetForm = ({ addWidget, categories }) => {
  const [categoryId, setCategoryId] = useState('');
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryId && widgetName && widgetText) {
      const newWidget = {
        id: `${categoryId}-${Date.now()}`,
        name: widgetName,
        text: widgetText,
      };
      addWidget(categoryId, newWidget);
      setWidgetName('');
      setWidgetText('');
    }
  };

  return (
    <form className="add-widget-form" onSubmit={handleSubmit}>
      <select
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Widget Name"
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Widget Text"
        value={widgetText}
        onChange={(e) => setWidgetText(e.target.value)}
      />
      <button type="submit">Add Widget</button>
    </form>
  );
};

export default AddWidgetForm;
