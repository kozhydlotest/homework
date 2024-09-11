// import React from 'react';
// import { Container, Typography, Card, CardContent, Grid, Link } from '@mui/material';
// import SidebarMenu from '../components/SidebarMenu'; 

// const MoreInstruction = () => {
//   const [drawerOpen, setDrawerOpen] = React.useState(false);

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   return (
//     <div>
//       <SidebarMenu drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
//       <Container sx={{ paddingTop: 4 }}>
//         <Typography variant="h1" gutterBottom>
//           Що робити, якщо...
//         </Typography>
        
//         <Card variant="outlined" sx={{ marginBottom: 4 }}>
//           <CardContent>
//             <Typography variant="h5" component="div" gutterBottom>
//               Сервер оновлюється
//             </Typography>
//             <Typography variant="body1" paragraph>
//               Якщо ви бачите порожній екран на головній сторінці, це може означати, що сервер в даний момент перезавантажується. Наш сервер оновлюється кожні 5 хвилин, щоб забезпечити актуальність інформації на сайті. Будь ласка, спробуйте оновити сторінку через кілька хвилин.
//             </Typography>
//           </CardContent>
//         </Card>

//         <Card variant="outlined" sx={{ marginBottom: 4 }}>
//           <CardContent>
//             <Typography variant="h5" component="div" gutterBottom>
//               Знайшли помилку або баг?
//             </Typography>
//             <Typography variant="body1" paragraph>
//               Якщо ти знайшов помилку на сайті або не знайшов розклад на цей день, будь ласка, повідом про це мене. Я вдячні за твою допомогу у покращенні сайту. Ти можеш написати мені особисто через телеграм:
//             </Typography>
//             <Typography variant="body1">
//               <Link href="https://t.me/kozhydlo" target="_blank" rel="noopener">
//                 Написати в Telegram
//               </Link>
//             </Typography>
//           </CardContent>
//         </Card>

//         <Card variant="outlined" sx={{ marginBottom: 4 }}>
//           <CardContent>
//             <Typography variant="h5" component="div" gutterBottom>
//               Інші питання
//             </Typography>
//             <Typography variant="body1" paragraph>
//               Якщо у тебе є інші питання чи пропозиції щодо сайту, будь ласка, напиши мені в телеграм.
//             </Typography>
//           </CardContent>
//         </Card>
        
//       </Container>
//     </div>
//   );
// };

// export default MoreInstruction;

import React from 'react';
import { Container, Typography, Card, CardContent, Link } from '@mui/material';
import SidebarMenu from '../components/SidebarMenu'; 

const MoreInstruction = () => {
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
      <Container 
        sx={{
          marginTop: 7,
          paddingTop: 4, 
          paddingBottom: 4, 
          backgroundColor: 'rgba(0, 0, 0, 0.1)',  // Напівпрозорий фон для контейнера
          borderRadius: 3,
          boxShadow: 3,
          maxWidth: 'md'
        }}
      >
        <Typography 
          variant="h3" 
          gutterBottom 
          sx={{ 
            marginBottom: 4, 
            textAlign: 'center', 
            color: '#ffffff', 
            fontWeight: 'bold',
            textShadow: '1px 1px 3px rgba(0,0,0,0.7)',  // Додавання тіні до тексту
          }}
        >
          Що робити, якщо...
        </Typography>
        
        {/* Блок 1 */}
        <Card 
          variant="outlined" 
          sx={{ 
            marginBottom: 4, 
            borderRadius: 2, 
            backgroundColor: 'rgba(255, 255, 255, 0.05)',  // Напівпрозорий фон картки
            boxShadow: 3,
            backdropFilter: 'blur(10px)',  // Ефект розмиття фону позаду картки
            transition: 'transform 0.3s, box-shadow 0.3s', 
            '&:hover': { 
              transform: 'scale(1.05)',
              boxShadow: 6 
            },
          }}
        >
          <CardContent>
            <Typography 
              variant="h5" 
              component="div" 
              gutterBottom 
              sx={{ 
                color: '#ffffff', 
                fontWeight: 'bold',
                textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
              }}
            >
              Сервер оновлюється
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: '#ffffff' }}>
              Якщо ви бачите порожній екран на головній сторінці, це може означати, що сервер в даний момент перезавантажується. Наш сервер оновлюється кожні 5 хвилин, щоб забезпечити актуальність інформації на сайті. Будь ласка, спробуйте оновити сторінку через кілька хвилин.
            </Typography>
          </CardContent>
        </Card>

        {/* Блок 2 */}
        <Card 
          variant="outlined" 
          sx={{ 
            marginBottom: 4, 
            borderRadius: 2, 
            backgroundColor: 'rgba(255, 255, 255, 0.05)',  // Напівпрозорий фон картки
            boxShadow: 3,
            backdropFilter: 'blur(10px)',  
            transition: 'transform 0.3s, box-shadow 0.3s', 
            '&:hover': { 
              transform: 'scale(1.05)',
              boxShadow: 6 
            },
          }}
        >
          <CardContent>
            <Typography 
              variant="h5" 
              component="div" 
              gutterBottom 
              sx={{ 
                color: '#ffffff', 
                fontWeight: 'bold',
                textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
              }}
            >
              Знайшли помилку або баг?
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: '#ffffff' }}>
              Якщо ти знайшов помилку на сайті або не знайшов розклад на цей день, будь ласка, повідом про це мене. Я вдячний за твою допомогу у покращенні сайту. Ти можеш написати мені особисто через телеграм:
            </Typography>
            <Typography variant="body1" sx={{ color: '#ffffff' }}>
              <Link 
                href="https://t.me/kozhydlo" 
                target="_blank" 
                rel="noopener" 
                sx={{ 
                  color: '#90caf9', 
                  textDecoration: 'underline',
                  '&:hover': { color: '#42a5f5' }  // Зміна кольору при наведенні
                }}
              >
                Написати в Telegram
              </Link>
            </Typography>
          </CardContent>
        </Card>

        {/* Блок 3 */}
        <Card 
          variant="outlined" 
          sx={{ 
            marginBottom: 4, 
            borderRadius: 2, 
            backgroundColor: 'rgba(255, 255, 255, 0.05)',  // Напівпрозорий фон картки
            boxShadow: 3,
            backdropFilter: 'blur(10px)',  
            transition: 'transform 0.3s, box-shadow 0.3s', 
            '&:hover': { 
              transform: 'scale(1.05)',
              boxShadow: 6 
            },
          }}
        >
          <CardContent>
            <Typography 
              variant="h5" 
              component="div" 
              gutterBottom 
              sx={{ 
                color: '#ffffff', 
                fontWeight: 'bold',
                textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
              }}
            >
              Інші питання
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: '#ffffff' }}>
              Якщо у тебе є інші питання чи пропозиції щодо сайту, будь ласка, напиши мені в телеграм.
            </Typography>
          </CardContent>
        </Card>
        
      </Container>
    </div>
  );
};

export default MoreInstruction;
