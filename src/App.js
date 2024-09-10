import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Spinner from './pages/Spinner';
import WeekSelect from './pages/WeekSelect';
import AdminPanel from './pages/AdminPanel';
import BellSchedule from './pages/BellSchedule';
import Schedule from './pages/Schedule';
import HomeworkSolutions from './pages/HomeworkSolutions';
import BooksOnline from './pages/BooksOnline';
import TeachersList from './pages/TeachersList';
import InstructionPage from './pages/InstructionPage'; 
import MobileInstruction from './pages/MobileInstruction'; 
import DesktopInstruction from './pages/DesktopInstruction';
import MoreInstruction from './pages/MoreInstruction'; 


const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer); 
  }, [location]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route path="/kozhydloadmin" element={<AdminPanel />} />
          <Route path="/" element={<WeekSelect />} />
          <Route path="/schedule/:weekId" element={<Schedule />} />
          <Route path="/bell-schedule" element={<BellSchedule />} />
          <Route path="/homework-solutions" element={<HomeworkSolutions />} />
          <Route path="/books" element={<BooksOnline />} />
          <Route path="/teachers" element={<TeachersList />} />
          <Route path="/instructions" element={<InstructionPage />} />
          <Route path="/instructions/mobile" element={<MobileInstruction />} />
          <Route path="/instructions/desktop" element={<DesktopInstruction />} />
          <Route path="/instructions/more" element={<MoreInstruction />} />
        </Routes>
      )}
    </>
  );
};

const Main = () => (
  <Router>
    <App />
  </Router>
);

export default Main;