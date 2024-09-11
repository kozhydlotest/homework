// import React from 'react';
// import { Card, CardContent, Typography, Container, Grid, IconButton } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { PhoneIphone, Computer, HelpOutline } from '@mui/icons-material';
// import SidebarMenu from '../components/SidebarMenu'; 

// const InstructionPage = () => {
//   const navigate = useNavigate();
//   const [drawerOpen, setDrawerOpen] = React.useState(false);
//     const [search, setSearch] = React.useState('');
    
//     const toggleDrawer = (open) => (event) => {
//         if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//             return;
//         }
//         setDrawerOpen(open);
//     };

//   return (
//     <div>
//       <SidebarMenu drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
//     <Container sx={{ paddingTop: 4, textAlign: 'center' }}>
//       <Typography variant="h3" gutterBottom sx={{ marginBottom: 4 }}>
//         Інструкції
//       </Typography>
//       <Grid container spacing={4} justifyContent="center">
//         <Grid item xs={12} sm={6} md={4}>
//           <Card
//             variant="outlined"
//             sx={{
//               borderRadius: 2,
//               cursor: 'pointer',
//               boxShadow: 3,
//               transition: 'transform 0.3s',
//               '&:hover': {
//                 transform: 'scale(1.05)',
//                 boxShadow: 6,
//               },
//             }}
//             onClick={() => navigate('/instructions/mobile')}
//           >
//             <CardContent sx={{ textAlign: 'center' }}>
//               <IconButton
//                 sx={{
//                   backgroundColor: '#e3f2fd',
//                   borderRadius: '50%',
//                   padding: 2,
//                   marginBottom: 2,
//                 }}
//               >
//                 <PhoneIphone color="primary" fontSize="large" />
//               </IconButton>
//               <Typography variant="h6" component="div" sx={{ marginBottom: 1 }}>
//                 Інструкція для телефону
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Клацніть для перегляду інструкцій по телефону.
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Card
//             variant="outlined"
//             sx={{
//               borderRadius: 2,
//               cursor: 'pointer',
//               boxShadow: 3,
//               transition: 'transform 0.3s',
//               '&:hover': {
//                 transform: 'scale(1.05)',
//                 boxShadow: 6,
//               },
//             }}
//             onClick={() => navigate('/instructions/desktop')}
//           >
//             <CardContent sx={{ textAlign: 'center' }}>
//               <IconButton
//                 sx={{
//                   backgroundColor: '#e8f5e9',
//                   borderRadius: '50%',
//                   padding: 2,
//                   marginBottom: 2,
//                 }}
//               >
//                 <Computer color="success" fontSize="large" />
//               </IconButton>
//               <Typography variant="h6" component="div" sx={{ marginBottom: 1 }}>
//                 Інструкція для ПК
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Клацніть для перегляду інструкцій по ПК.
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Card
//             variant="outlined"
//             sx={{
//               borderRadius: 2,
//               cursor: 'pointer',
//               boxShadow: 3,
//               transition: 'transform 0.3s',
//               '&:hover': {
//                 transform: 'scale(1.05)',
//                 boxShadow: 6,
//               },
//             }}
//             onClick={() => navigate('/instructions/more')}
//           >
//             <CardContent sx={{ textAlign: 'center' }}>
//               <IconButton
//                 sx={{
//                   backgroundColor: '#fff3e0',
//                   borderRadius: '50%',
//                   padding: 2,
//                   marginBottom: 2,
//                 }}
//               >
//                 <HelpOutline color="warning" fontSize="large" />
//               </IconButton>
//               <Typography variant="h6" component="div" sx={{ marginBottom: 1 }}>
//                 Інше
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Що робити, якщо не відображається тиждень...
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//     </div>
//   );
// };

// export default InstructionPage;

import React from 'react';
import { Card, CardContent, Typography, Container, Grid, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PhoneIphone, Computer, HelpOutline } from '@mui/icons-material';
import SidebarMenu from '../components/SidebarMenu';

const InstructionPage = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <div style={{  background: 'linear-gradient(135deg, #6A11CB 0%, #2575FC 100%)', backgroundSize: 'cover', minHeight: '100vh' }}>
      <SidebarMenu drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      <Container sx={{ paddingTop: 4, textAlign: 'center', backdropFilter: 'blur(6px)' }}>
      <Typography  variant="h1" gutterBottom sx={{ color: '#fff' }}>
          Інструкції
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card
              variant="outlined"
              sx={{
                borderRadius: 2,
                cursor: 'pointer',
                boxShadow: 3,
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                },
              }}
              onClick={() => navigate('/instructions/mobile')}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <IconButton
                  sx={{
                    backgroundColor: '#e3f2fd',
                    borderRadius: '50%',
                    padding: 2,
                    marginBottom: 2,
                  }}
                >
                  <PhoneIphone color="primary" fontSize="large" />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ marginBottom: 1 }}>
                  Інструкція для телефону
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Клацніть для перегляду інструкцій по телефону.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
           <Card
             variant="outlined"
             sx={{
               borderRadius: 2,
               cursor: 'pointer',
               boxShadow: 3,
               transition: 'transform 0.3s',
               '&:hover': {
                transform: 'scale(1.05)',
                 boxShadow: 6,
               },
             }}
             onClick={() => navigate('/instructions/desktop')}
           >
             <CardContent sx={{ textAlign: 'center' }}>
               <IconButton
                 sx={{
                   backgroundColor: '#e8f5e9',
                   borderRadius: '50%',
                   padding: 2,
                   marginBottom: 2,
                 }}
               >
                 <Computer color="success" fontSize="large" />
               </IconButton>
              <Typography variant="h6" component="div" sx={{ marginBottom: 1 }}>
                 Інструкція для ПК
               </Typography>
               <Typography variant="body2" color="textSecondary">
                 Клацніть для перегляду інструкцій по ПК.
               </Typography>
             </CardContent>
           </Card>
         </Grid>
         <Grid item xs={12} sm={6} md={4}>
           <Card
             variant="outlined"
             sx={{
               borderRadius: 2,
               cursor: 'pointer',
               boxShadow: 3,
               transition: 'transform 0.3s',
               '&:hover': {
                 transform: 'scale(1.05)',
                 boxShadow: 6,
               },
             }}
             onClick={() => navigate('/instructions/more')}
           >
             <CardContent sx={{ textAlign: 'center' }}>
               <IconButton
                 sx={{
                   backgroundColor: '#fff3e0',
                   borderRadius: '50%',
                   padding: 2,
                   marginBottom: 2,
                 }}
               >
                 <HelpOutline color="warning" fontSize="large" />
               </IconButton>
               <Typography variant="h6" component="div" sx={{ marginBottom: 1 }}>
                 Інше
               </Typography>
              <Typography variant="body2" color="textSecondary">
                Що робити, якщо не відображається тиждень...
               </Typography>
             </CardContent>
           </Card>
         </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default InstructionPage;
