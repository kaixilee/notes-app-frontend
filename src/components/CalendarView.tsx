// src/components/CalendarView.tsx
import React from 'react';
import TopPanel from './TopPanel';

const CalendarView: React.FC = () => {
  return (
    <div className="calendar-view">
      <TopPanel />
      <div className="main-content">
        <h1>Calendar</h1>
        <p>This is the calendar view. Placeholder content here.</p>
      </div>
    </div>
  );
};

export default CalendarView;
