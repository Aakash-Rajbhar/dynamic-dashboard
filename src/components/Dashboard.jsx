import React, { useState } from 'react';
import Category from './Category';
import './Dashboard.css';

const Dashboard = () => {
  const initialData = [
    {
      id: 'cspm',
      name: 'CSPM Executive Dashboard',
      widgets: [
        {
          id: 'w1',
          name: 'Cloud Accounts',
          text: 'Random text here...',
          icon: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/cloud-account-2735188-2313420.png?f=webp&w=256',
        },
        {
          id: 'w2',
          name: 'Cloud Account Risk Assessment',
          text: 'Random text here...',
          icon: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/cloud-hacking-8506753-6973352.png?f=webp&w=256',
        },
      ],
    },
    {
      id: 'cwpp',
      name: 'CWPP Dashboard',
      widgets: [
        {
          id: 'w3',
          name: 'Top 5 Namespace Specific Alerts',
          text: 'Random text here...',
          icon: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/namespace-2161444-1824906.png?f=webp&w=256',
        },
        {
          id: 'w4',
          name: 'Workload Alerts',
          text: 'Random text here...',
          icon: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/app-alert-3115176-2599889.png?f=webp&w=256',
        },
      ],
    },
    {
      id: 'registry-scan',
      name: 'Registry Scan',
      widgets: [
        {
          id: 'w5',
          name: 'Image Risk Assessment',
          text: 'Random text here...',
          icon: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/crisis-due-to-rumors-6509581-5450873.png?f=webp&w=256',
        },
        {
          id: 'w6',
          name: 'Image Security Issues',
          text: 'Random text here...',
          icon: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/image-security-7197982-5860267.png?f=webp&w=256',
        },
      ],
    },
  ];

  const [categories, setCategories] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const addWidgetToCategory = (categoryId, widgetName, widgetText) => {
    const newCategories = categories.map((category) => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: [
            ...category.widgets,
            { id: `w${Date.now()}`, name: widgetName, text: widgetText },
          ],
        };
      }
      return category;
    });
    setCategories(newCategories);
  };

  const removeWidgetFromCategory = (categoryId, widgetId) => {
    const newCategories = categories.map((category) => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: category.widgets.filter((widget) => widget.id !== widgetId),
        };
      }
      return category;
    });
    setCategories(newCategories);
  };

  const handleAddWidgetClick = () => {
    setShowModal(true);
  };

  const handleModalSubmit = () => {
    addWidgetToCategory(selectedCategoryId, widgetName, widgetText);
    setShowModal(false);
    setWidgetName('');
    setWidgetText('');
  };

  const handleRefreshClick = () => {
    window.location.reload();
  };

  return (
    <div className="dashboard">
      {/* Top Section */}
      <div className="dashboard-top-section">
        <div className="breadcrumb">
          <span>Home</span> &gt; <span>Dashboard V2</span>
        </div>
        <div className="dashboard-actions">
          <button className="add-widget-button" onClick={handleAddWidgetClick}>
            Add Widget +
          </button>
          <button className="refresh-button" onClick={handleRefreshClick}>
            &#x21bb;
          </button>
          <div className="date-range-selector">
            <span>Last 2 days</span> &#x25bc;
          </div>
        </div>
      </div>

      {/* Dashboard Categories */}
      {categories.map((category) => (
        <Category
          key={category.id}
          category={category}
          addWidgetToCategory={addWidgetToCategory}
          removeWidgetFromCategory={removeWidgetFromCategory}
        />
      ))}

      {/* Add Widget Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add Widget</h2>
            <select
              value={selectedCategoryId}
              onChange={(e) => setSelectedCategoryId(e.target.value)}
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
            <textarea
              placeholder="Widget Text"
              value={widgetText}
              onChange={(e) => setWidgetText(e.target.value)}
            />
            <div className="modal-actions">
              <button onClick={handleModalSubmit}>Add Widget</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
