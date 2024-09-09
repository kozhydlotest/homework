import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeekSelect from './pages/WeekSelect';
import AdminPanel from './pages/AdminPanel';
import BellSchedule from './pages/BellSchedule';
import Schedule from './pages/Schedule';
import HomeworkSolutions from './pages/HomeworkSolutions';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/kozhydloadmin" element={<AdminPanel />} />
        <Route path="/" element={<WeekSelect />} />
        <Route path="/schedule/:weekId" element={<Schedule />} />
        <Route path="/bell-schedule" element={<BellSchedule />} />
        <Route path="/homework-solutions" element={<HomeworkSolutions />} />
      </Routes>
    </Router>
  );
}

export default App;
