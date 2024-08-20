import React from 'react';
import '../styles/Header.css';
import SearchBox from './SearchBox';

function Header({ openAddWidgetPage, searchQuery, setSearchQuery, onRefresh }) {
  return (
    <header className="header">
      <h2>CNAPP Dashboard</h2>
      <div className="header-section">
        <button onClick={openAddWidgetPage}>Add Widget +</button>
        <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <button onClick={onRefresh}>🔃</button>
        <button>⋮</button>
        <button>🕓 last 2 days</button>
      </div>
    </header>
  );
}

export default Header;
