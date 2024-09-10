import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Link } from '@mui/material';
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
    <div>
      <SidebarMenu drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      <Container sx={{ paddingTop: 4 }}>
        <Typography variant="h1" gutterBottom>
          Що робити, якщо...
        </Typography>
        
        <Card variant="outlined" sx={{ marginBottom: 4 }}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Сервер оновлюється
            </Typography>
            <Typography variant="body1" paragraph>
              Якщо ви бачите порожній екран на головній сторінці, це може означати, що сервер в даний момент перезавантажується. Наш сервер оновлюється кожні 5 хвилин, щоб забезпечити актуальність інформації на сайті. Будь ласка, спробуйте оновити сторінку через кілька хвилин.
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ marginBottom: 4 }}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Знайшли помилку або баг?
            </Typography>
            <Typography variant="body1" paragraph>
              Якщо ти знайшов помилку на сайті або не знайшов розклад на цей день, будь ласка, повідом про це мене. Я вдячні за твою допомогу у покращенні сайту. Ти можеш написати мені особисто через телеграм:
            </Typography>
            <Typography variant="body1">
              <Link href="https://t.me/kozhydlo" target="_blank" rel="noopener">
                Написати в Telegram
              </Link>
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ marginBottom: 4 }}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Інші питання
            </Typography>
            <Typography variant="body1" paragraph>
              Якщо у тебе є інші питання чи пропозиції щодо сайту, будь ласка, напиши мені в телеграм.
            </Typography>
          </CardContent>
        </Card>
        
      </Container>
    </div>
  );
};

export default MoreInstruction;
