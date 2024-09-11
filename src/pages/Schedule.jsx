// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Grid, List, ListItem, ListItemText, Paper, Box, Typography} from '@mui/material';
// import SidebarMenu from '../components/SidebarMenu'; // Імпорт нового компоненту
// import data from '../data';
// import AssignmentModal from './AssignmentModal'; 
// import { API_BASE_URL } from '../config'; // тут

// const Schedule = () => {
//   const [assignments, setAssignments] = useState([]);
//   const [selectedAssignment, setSelectedAssignment] = useState(null);
//   const [open, setOpen] = useState(false);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const { weekId } = useParams();

//   useEffect(() => {
//     if (weekId) {
//       axios.get(`${API_BASE_URL}/api/assignments/${weekId}`)
//         .then(response => setAssignments(response.data))
//         .catch(error => console.error('Error fetching assignments:', error));
//     }
//   }, [weekId]);

//   const handleClickOpen = (subject, day) => {
//     const assignmentList = assignments.filter(a => a.subject === subject && a.day === day);
//     setSelectedAssignment(assignmentList);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <SidebarMenu drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />

//       <Grid container spacing={4} sx={{ padding: 3 }}>
//         {Object.entries(data).map(([day, subjects]) => (
//           <Grid item xs={12} sm={6} md={4} key={day}>
//             <Paper elevation={3} sx={{ p: 2, borderRadius: '12px' }}>
//               <Typography variant="h6" sx={{ mb: 2, fontWeight: '600', color: '#2c3e50' }}>
//                 {day}
//               </Typography>
//               <List>
//                 {subjects.map(subject => (
//                   <ListItem
//                     button
//                     key={subject}
//                     onClick={() => handleClickOpen(subject, day)}
//                     sx={{
//                       '&:hover': {
//                         backgroundColor: '#e3f2fd',
//                         borderRadius: '8px'
//                       }
//                     }}
//                   >
//                     <ListItemText
//                       primary={subject}
//                       primaryTypographyProps={{ fontWeight: '500', color: '#1e88e5' }}
//                     />
//                   </ListItem>
//                 ))}
//               </List>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       <AssignmentModal
//         open={open}
//         handleClose={handleClose}
//         selectedAssignment={selectedAssignment}
//       />
//     </Box>
//   );
// };

// export default Schedule;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Grid, List, ListItem, ListItemText, Paper, Box, Typography } from '@mui/material';
import SidebarMenu from '../components/SidebarMenu'; // Імпорт нового компоненту
import data from '../data';
import AssignmentModal from './AssignmentModal'; 
import { API_BASE_URL } from '../config'; // тут

const Schedule = () => {
  const [assignments, setAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { weekId } = useParams();

  useEffect(() => {
    if (weekId) {
      axios.get(`${API_BASE_URL}/api/assignments/${weekId}`)
        .then(response => setAssignments(response.data))
        .catch(error => console.error('Error fetching assignments:', error));
    }
  }, [weekId]);

  const handleClickOpen = (subject, day) => {
    const assignmentList = assignments.filter(a => a.subject === subject && a.day === day);
    setSelectedAssignment(assignmentList);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <div>
       <SidebarMenu drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />

    <Box sx={{
      flexGrow: 1, 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #6A11CB 0%, #2575FC 100%)', // Задній фон
      paddingTop: 3
    }}>

      <Grid container spacing={4} sx={{ padding: 3 }}>
        {Object.entries(data).map(([day, subjects]) => (
          <Grid item xs={12} sm={6} md={4} key={day}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 2, 
                borderRadius: '12px', 
                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Напівпрозорий фон
                backdropFilter: 'blur(10px)', // Ефект розмиття заднього фону
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // Легкий ефект тіні
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 2, 
                  fontWeight: '600', 
                  color: '#fff', // Білий текст для контрасту
                  textShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' // Легке підсвічення тексту
                }}
              >
                {day}
              </Typography>
              <List>
                {subjects.map(subject => (
                  <ListItem
                    button
                    key={subject}
                    onClick={() => handleClickOpen(subject, day)}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.3)', // Трохи світліший фон при наведенні
                        borderRadius: '8px'
                      }
                    }}
                  >
                    <ListItemText
                      primary={subject}
                      primaryTypographyProps={{ 
                        fontWeight: '500', 
                        color: '#ffffff', // Білий текст для предметів
                        textShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)', // Тінь для тексту предметів
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <AssignmentModal
        open={open}
        handleClose={handleClose}
        selectedAssignment={selectedAssignment}
      />
    </Box>
    </div>
  );
};

export default Schedule;
