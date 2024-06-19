// src/components/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="profile-picture"></div>
      <Link to="/notes">
        <button>Notes</button>
      </Link>
      <Link to="/calendar">
        <button>Calendar</button>
      </Link>
    </div>
  );
};

export default Sidebar;
