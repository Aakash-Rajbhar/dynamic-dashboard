import React from 'react';
import './Widget.css';

const Widget = ({ widget, removeWidget }) => {
  return (
    <div className="widget">
      {/* Icon section */}
      <div className="widget-icon">
        <img src={widget.icon} alt={`${widget.name} icon`} />
      </div>

      {/* Content section */}
      <div className="widget-content">
        <p className="widget-name">{widget.name}</p>
        <p className="widget-text">{widget.text}</p>
      </div>

      {/* Remove button */}
      <button className="remove-widget" onClick={removeWidget}>
        ×
      </button>
    </div>
  );
};

export default Widget;
