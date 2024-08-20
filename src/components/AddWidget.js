import React from 'react';
import '../styles/addwidget.css'

function AddWidget({ onClick }) {
  return (
    <div className="new-widget-card">
      <button onClick={onClick}>Add widget +</button>
    </div>
  );
}

export default AddWidget;
