import React, { useState } from 'react';
import '../styles/AddWidgetPage.css';

function AddWidgetPage({ availableWidgets, onAdd, onClose, sectionToAddWidget }) {
  const [selectedCategory, setSelectedCategory] = useState(sectionToAddWidget);
  const [selectedWidgets, setSelectedWidgets] = useState([]);
  const [newWidgetName, setNewWidgetName] = useState('');
  const [newWidgetText, setNewWidgetText] = useState('');

  const categories = {
    cspm_section: 'CSPM Executive Dashboard',
    cwpp_section: 'CWPP Dashboard',
    registry_scan_section: 'Registry Scan',
    ticket_section: 'Ticket Dashboard'
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedWidgets([]);
    setNewWidgetName('');
    setNewWidgetText('');
  };

  const handleWidgetSelect = (widgetId) => {
    setSelectedWidgets((prev) =>
      prev.includes(widgetId)
        ? prev.filter((id) => id !== widgetId)
        : [...prev, widgetId]
    );
  };

  const handleNewWidgetNameChange = (e) => {
    setNewWidgetName(e.target.value);
  };

  const handleNewWidgetTextChange = (e) => {
    setNewWidgetText(e.target.value);
  };

  const handleConfirm = () => {
    if (!newWidgetName.trim() || !newWidgetText.trim()) {
      alert("Please provide both name and text for the new widget.");
      return;
    }
    const newWidget = {
      id: `${Date.now()}`,
      name: newWidgetName,
      type: 'text',  
      data: newWidgetText,
      sectionId: selectedCategory
    };
    onAdd([newWidget]); 
    onClose();
  };

  const widgetsInCategory = availableWidgets.filter(widget => widget.sectionId === selectedCategory);

  return (
    <div className="addpage">
      <div className="addpage_content">
        <div className="addpage_header">
          <h2>Add Widget</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <p>Personalize your dashboard by adding the following widget</p>
        <div className="categories">
          {Object.keys(categories).map((categoryId) => (
            <label key={categoryId}>
              <input
                type="radio"
                name="category"
                value={categoryId}
                checked={selectedCategory === categoryId}
                onChange={handleCategoryChange}
              />
              {categories[categoryId]}
            </label>
          ))}
        </div>
        <div className="widgets">
          {widgetsInCategory.map((widget) => (
            <label key={widget.id}>
              <input
                type="checkbox"
                checked={selectedWidgets.includes(widget.id)}
                onChange={() => handleWidgetSelect(widget.id)}
              />
              {widget.name}
            </label>
          ))}
        </div>
        <div className="new-widget">
          <h3>Add New Widget</h3>
          <label>
            Name:
            <input
              type="text"
              value={newWidgetName}
              onChange={handleNewWidgetNameChange}
            />
          </label>
          <label>
            Text:
            <textarea
              value={newWidgetText}
              onChange={handleNewWidgetTextChange}
            />
          </label>
        </div>
        <div className="addpage-footer">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default AddWidgetPage;
