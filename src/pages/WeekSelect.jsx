// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import 'materialize-css/dist/css/materialize.min.css';
// import { API_BASE_URL } from '../config'; // тут
// import SidebarMenu from '../components/SidebarMenu'; 
// import { Container, Typography, Grid, Paper, Box } from '@mui/material'

// const WeekSelect = () => {
//   const [weeks, setWeeks] = useState([]);
//   const navigate = useNavigate();

//   const [drawerOpen, setDrawerOpen] = React.useState(false);

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   useEffect(() => {
//     axios.get(`${API_BASE_URL}/api/weeks`) // тут
//       .then(response => setWeeks(response.data))
//       .catch(error => console.error('Error fetching weeks:', error));
//   }, []);

//   const handleSelect = (weekId) => {
//     navigate(`/schedule/${weekId}`);
//   };

//   return (
//     <div>
//        <SidebarMenu drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
//     <div className="container">

//       <h2 className="center-align" style={{ margin: '30px 0', fontWeight: '600', color: '#2c3e50' }}>
//         Оберіть тиждень
//       </h2>
//       <div className="row">
//         {weeks.map(week => (
//           <div key={week._id} className="col s12 m4">
//             <div 
//               className="card hoverable"
//               onClick={() => handleSelect(week._id)}
//               style={{
//                 cursor: 'pointer',
//                 borderRadius: '10px',
//                 backgroundColor: '#f7f9fb',
//                 transition: 'transform 0.2s ease-in-out',
//               }}
//             >
//               <div className="card-content" style={{ padding: '20px' }}>
//                 <span className="card-title" style={{ fontSize: '18px', color: '#34495e', fontWeight: '500' }}>
//                   {new Date(week.startDate).toLocaleDateString()} - {new Date(week.endDate).toLocaleDateString()}
//                 </span>
//               </div>
//               <div className="card-action" style={{ borderTop: '1px solid #ecf0f1' }}>
//                 <button 
//                   className="btn-small waves-effect waves-light" 
//                   style={{ backgroundColor: '#3498db', borderRadius: '20px' }}
//                 >
//                   Переглянути
//                 </button>
//               </div>
//             </div>
//           </div>
          
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default WeekSelect;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import { API_BASE_URL } from '../config'; // тут
import SidebarMenu from '../components/SidebarMenu'; 

const WeekSelect = () => {
  const [weeks, setWeeks] = useState([]);
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0); // Тримаємо поточний індекс тижня
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/weeks`) // тут
      .then(response => setWeeks(response.data))
      .catch(error => console.error('Error fetching weeks:', error));
  }, []);

  const handleSelect = (weekId) => {
    navigate(`/schedule/${weekId}`);
  };

  // Функції для навігації між тижнями
  const handleNextWeek = () => {
    if (currentWeekIndex < weeks.length - 1) {
      setCurrentWeekIndex(currentWeekIndex + 1);
    }
  };

  const handlePrevWeek = () => {
    if (currentWeekIndex > 0) {
      setCurrentWeekIndex(currentWeekIndex - 1);
    }
  };

  return (
    <div style={{
      height: '100vh', 
      background: 'linear-gradient(135deg, #6A11CB 0%, #2575FC 100%)', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
    }}>
      {/* SidebarMenu */}
      <SidebarMenu drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />


      {/* Main Content */}
      <div style={{
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',  // Додаємо відносне позиціонування для стрілок
      }}>
        {/* Стрілка вліво */}
        {currentWeekIndex > 0 && (
          <div 
            onClick={handlePrevWeek} 
            style={{
              position: 'absolute', 
              left: '10px', 
              top: '49%',       
              cursor: 'pointer',
              padding: '10px', 
              color: 'white',
              fontSize: '30px', // Зменшено розмір
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            &lt;
          </div>
        )}

        {/* Основна картка тижня */}
        {weeks.length > 0 && (
          <div className='div-pad' style={{
            textAlign: 'center', 
            padding: '40px 80px', // Збільшуємо прозорий фон
            borderRadius: '20px', 
            backgroundColor: 'rgba(255, 255, 255, 0.2)', 
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          }}>
            <h2 style={{ color: 'white', fontWeight: '600', marginBottom: '20px' }}>
              Оберіть тиждень
            </h2>
            <div style={{
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              gap: '10px'
            }}>
              <div key={weeks[currentWeekIndex]._id} style={{ margin: '10px 0' }}>
                <div 
                  onClick={() => handleSelect(weeks[currentWeekIndex]._id)}
                  style={{
                    cursor: 'pointer',
                    padding: '15px 25px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    transition: 'transform 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    // Забираємо білий бордер
                  }}
                >
                  <span style={{ fontSize: '20px', fontWeight: '500' }}>
                    {new Date(weeks[currentWeekIndex].startDate).toLocaleDateString()} - {new Date(weeks[currentWeekIndex].endDate).toLocaleDateString()}
                  </span>
                  <button 
                    style={{
                      marginTop: '10px',
                      backgroundColor: '#3498db',
                      color: 'white',
                      border: 'none',
                      padding: '10px 30px',
                      borderRadius: '20px',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s',
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
                  >
                    Переглянути
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Стрілка вправо */}
{currentWeekIndex < weeks.length - 1 && (
  <div 
    onClick={handleNextWeek} 
    style={{
      position: 'absolute', 
      right: '10px', 
      top: '49%', 
      cursor: 'pointer',
      padding: '10px', 
      color: 'white',
      fontSize: '30px', // Зменшено розмір
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    &gt;
  </div>
)}
      </div>
    </div>
  );
};

export default WeekSelect;
