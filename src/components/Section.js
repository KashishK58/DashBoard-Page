import React from 'react';
import Widget from '../components/Widget';
import AddWidget from '../components/AddWidget';

function Section({ section, removeBtnWidget, openAddWidgetPage }) {
  return (
    <div className="section">
      <h3>{section.name}</h3>
      <div className="widgets-container">
        {section.widgets.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            removeBtn={() => removeBtnWidget(widget.id, section.id)}
          />
        ))}
        <AddWidget onClick={openAddWidgetPage} />
      </div>
    </div>
  );
}

export default Section;
