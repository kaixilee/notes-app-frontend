// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NotesView from "./components/NotesView";
import CalendarView from "./components/CalendarView";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/notes" element={<NotesView />} />
            <Route path="/calendar" element={<CalendarView />} />
            <Route path="/" element={<NotesView />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
