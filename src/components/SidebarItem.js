import React from 'react';

export default function SidebarItem(props) {
  const { name, active, handleClick } = props;

  return (
    <button
      className={`sidebar-item ${active ? 'active' : ''}`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}
