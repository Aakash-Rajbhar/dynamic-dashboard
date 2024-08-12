import React, { useState } from 'react';
import Widget from './Widget';
import './Category.css';

const Category = ({
  category,
  addWidgetToCategory,
  removeWidgetFromCategory,
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newWidgetName, setNewWidgetName] = useState('');
  const [newWidgetText, setNewWidgetText] = useState('');

  const handleAddWidgetClick = () => {
    setIsAdding(true);
  };

  const handleConfirmAddWidget = () => {
    if (newWidgetName && newWidgetText) {
      addWidgetToCategory(category.id, newWidgetName, newWidgetText);
      setNewWidgetName('');
      setNewWidgetText('');
      setIsAdding(false);
    }
  };

  const handleCancelAddWidget = () => {
    setNewWidgetName('');
    setNewWidgetText('');
    setIsAdding(false);
  };

  return (
    <div className="category">
      <h3>{category.name}</h3>
      <div className="widget-container">
        {category.widgets.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            removeWidget={() =>
              removeWidgetFromCategory(category.id, widget.id)
            }
          />
        ))}
        <div className="widget add-widget-card" onClick={handleAddWidgetClick}>
          + Add Widget
        </div>
        {isAdding && (
          <div className="add-widget-form">
            <input
              type="text"
              placeholder="Widget Name"
              value={newWidgetName}
              onChange={(e) => setNewWidgetName(e.target.value)}
            />
            <textarea
              placeholder="Widget Text"
              value={newWidgetText}
              onChange={(e) => setNewWidgetText(e.target.value)}
            />
            <div className="add-widget-form-buttons">
              <button onClick={handleConfirmAddWidget}>Add</button>
              <button onClick={handleCancelAddWidget}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
