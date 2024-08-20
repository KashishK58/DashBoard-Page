import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import AddWidgetPage from './components/AddWidgetPage';
import WidgetPopup from './components/WidgetPopup';
import initialDashboardData from './data/dashboard';

function App() {
  const [dashboardData, setDashboardData] = useState(initialDashboardData);
  const [showAddWidgetPage, setShowAddWidgetPage] = useState(false);
  const [sectionToAddWidget, setSectionToAddWidget] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWidget, setSelectedWidget] = useState(null);

  const handleAddWidget = (newWidgets) => {
    setDashboardData((prevData) => {
      const updatedSections = prevData[0].dashboard.sections.map((section) => {
        if (newWidgets.some((widget) => widget.sectionId === section.id)) {
          return {
            ...section,
            widgets: [
              ...section.widgets,
              ...newWidgets.filter((widget) => widget.sectionId === section.id),
            ],
          };
        }
        return section;
      });

      const updatedData = [
        {
          ...prevData[0],
          dashboard: {
            ...prevData[0].dashboard,
            sections: updatedSections,
          },
        },
      ];
      
      console.log("Updated Dashboard Data:", updatedData);
      return updatedData;
    });
  };

  const handleRemoveWidget = (widgetId, sectionId) => {
    setDashboardData((prevData) => {
      const updatedSections = prevData[0].dashboard.sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            widgets: section.widgets.filter((widget) => widget.id !== widgetId),
          };
        }
        return section;
      });

      return [
        {
          ...prevData[0],
          dashboard: {
            ...prevData[0].dashboard,
            sections: updatedSections,
          },
        },
      ];
    });
  };

  const handleSearchWidget = (query) => {
    if (!query) {
      setSelectedWidget(null);
      return;
    }
    
    const foundWidget = dashboardData[0].dashboard.sections.flatMap(section => section.widgets)
      .find(widget => widget.name.toLowerCase().includes(query.toLowerCase()));
    
    setSelectedWidget(foundWidget || null);
  };

  const handleClosePopup = () => {
    setSelectedWidget(null);
    setSearchQuery(''); 
  };

  const handleRefresh = () => {
    setDashboardData(initialDashboardData);
  };

  return (
    <div className="App">
      <Header 
        openAddWidgetPage={() => setShowAddWidgetPage(true)} 
        searchQuery={searchQuery}
        setSearchQuery={(query) => {
          setSearchQuery(query);
          handleSearchWidget(query);
        }}
        onRefresh={handleRefresh}
      />
      <div className={`main-content ${selectedWidget ? 'blur-background' : ''}`}>
        <div className="section-container">
          {dashboardData[0].dashboard.sections.map((section) => (
            <Section
              key={section.id}
              section={section}
              removeBtnWidget={handleRemoveWidget}
              openAddWidgetPage={() => {
                setSectionToAddWidget(section.id);
                setShowAddWidgetPage(true);
              }}
            />
          ))}
        </div>
        {showAddWidgetPage && (
          <AddWidgetPage
            availableWidgets={dashboardData[0].dashboard.sections.flatMap((section) => section.widgets)}
            onAdd={handleAddWidget}
            onClose={() => setShowAddWidgetPage(false)}
            sectionToAddWidget={sectionToAddWidget}
          />
        )}
      </div>
      {selectedWidget && (
        <WidgetPopup 
          widget={selectedWidget}
          closeFn={handleClosePopup}
        />
      )}
    </div>
  );
}

export default App;
