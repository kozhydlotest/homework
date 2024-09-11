
// import React from 'react';
// import { Container, Typography, Grid, Paper, Box } from '@mui/material';
// import SidebarMenu from '../components/SidebarMenu'; // Імпорт нового компоненту

// const BellSchedule = () => {
//   const [drawerOpen, setDrawerOpen] = React.useState(false);

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const schedule = [
//     { period: "1 урок", time: "08:30 - 09:15" },
//     { period: "2 урок", time: "09:25 - 10:10" },
//     { period: "3 урок", time: "10:30 - 11:15" },
//     { period: "4 урок", time: "11:35 - 12:20" },
//     { period: "5 урок", time: "12:30 - 13:15" },
//     { period: "6 урок", time: "13:25 - 14:10" },
//     { period: "7 урок", time: "14:20 - 15:05" },
//     { period: "8 урок", time: "15:15 - 16:00" },
//   ];

//   return (
// 		<div>
// 			<SidebarMenu drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
//     <Container>
     

//       <Typography variant="h4" gutterBottom align="center" sx={{ mt: 4, mb: 4, fontWeight: 'bold', color: '#34495e' }}>
//         Розклад Дзвінків
//       </Typography>
//       <Grid container spacing={2}>
//         {schedule.map((entry, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Paper elevation={3} sx={{ p: 2, borderRadius: '12px', textAlign: 'center' }}>
//               <Typography variant="h6" sx={{ mb: 1, fontWeight: '600', color: '#2c3e50' }}>
//                 {entry.period}
//               </Typography>
//               <Typography variant="body1" sx={{ color: '#1e88e5' }}>
//                 {entry.time}
//               </Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
// 		</div>
//   );
// };

// export default BellSchedule;


import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import SidebarMenu from '../components/SidebarMenu'; // Імпорт нового компоненту

const BellSchedule = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const schedule = [
    { period: "1 урок", time: "08:30 - 09:15" },
    { period: "2 урок", time: "09:25 - 10:10" },
    { period: "3 урок", time: "10:30 - 11:15" },
    { period: "4 урок", time: "11:35 - 12:20" },
    { period: "5 урок", time: "12:30 - 13:15" },
    { period: "6 урок", time: "13:25 - 14:10" },
    { period: "7 урок", time: "14:20 - 15:05" },
    { period: "8 урок", time: "15:15 - 16:00" },
  ];

  return (

    <div>
       <SidebarMenu drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
    
    <Box
      sx={{
        minHeight: '100vh', // Повна висота сторінки
        background: 'linear-gradient(135deg, #6A11CB 0%, #2575FC 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 3,
      }}
    >
     

      <Container>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{
            mt: 4,
            mb: 4,
            fontWeight: 'bold',
            color: '#fff',
            textShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)', // Тінь для тексту
          }}
        >
          Розклад Дзвінків
        </Typography>
        
        <Grid container spacing={2}>
          {schedule.map((entry, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  borderRadius: '12px',
                  textAlign: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)', // Напівпрозорий білий фон
                  backdropFilter: 'blur(10px)', // Розмиття заднього фону
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // Тінь
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1,
                    fontWeight: '600',
                    color: '#fff',
                    textShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)', // Тінь для білого тексту
                  }}
                >
                  {entry.period}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#fff',
                    textShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)', // Тінь для білого тексту
                  }}
                >
                  {entry.time}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
    </div>
  );
};

export default BellSchedule;
