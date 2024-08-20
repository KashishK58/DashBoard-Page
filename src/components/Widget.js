import React from 'react';
import Piechart from './Piechart';
import Scalechart from './Scalechart';
import '../styles/widget.css'; 

function Widget({ widget, removeBtn }) {
  return (
    <div className="widget-card">
      <h3 className="widget-name">{widget.name}</h3>
      {removeBtn && (
        <button onClick={removeBtn} className="remove-button">×</button>
      )}
      <div className="graph-container">
        {widget.type === 'text' && <p>{widget.data}</p>}
        {widget.type === 'circular_graph' && <Piechart data={widget.data} />}
        {widget.type === 'scale_graph' && <Scalechart data={widget.data} />}
      </div>
      {widget.description && <p>{widget.description}</p>}
    </div>
  );
}

export default Widget;
