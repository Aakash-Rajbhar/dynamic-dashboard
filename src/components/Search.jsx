import React, { useState } from 'react';
import './Search.css';

const Search = ({ categories }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWidgets = categories.flatMap((category) =>
    category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search widgets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="search-results">
        {filteredWidgets.map((widget) => (
          <div key={widget.id} className="search-result-item">
            <p>{widget.name}</p>
            <p>{widget.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
