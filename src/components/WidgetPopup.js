import React from 'react';
import '../styles/widgetpopup.css';

function WidgetPopup({ widget, closeFn }) {
  return (
    <div className="popup-overlay" onClick={closeFn}>
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeFn}>X</button>
        <h2>{widget.name}</h2>
        <p>{widget.description}</p>
        {}
      </div>
    </div>
  );
}

export default WidgetPopup;
