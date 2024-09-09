
import React from 'react';
import { Container, Typography, Grid, Paper, Box, IconButton } from '@mui/material';
import SidebarMenu from '../components/SidebarMenu'; // Імпорт нового компоненту
import MenuIcon from '@mui/icons-material/Menu';

const HomeworkSolutions = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const subjects = [
    { name: 'Алгебра', link: 'https://vshkole.com/9-klass/reshebniki/algebra/ag-merzlyak-vb-polonskij-ms-yakir-2017' },
    { name: 'Фізика', link: 'https://vshkole.com/9-klass/reshebniki/fizika/vg-baryahtar-fya-bozhinova-so-dovgij-2017' },
    { name: 'Хімія', link: 'https://4book.org/gdz-reshebniki-ukraina/9-klas/gdz-vidpovidi-himiya-9-klas-savchin-2017' },
    { name: 'Біологія', link: 'https://vshkole.com/9-klass/reshebniki/biologiya/km-zadorozhnij-2017-robochij-zoshit' },
		{ name: 'Геометрія', link: 'https://vshkole.com/9-klass/reshebniki/geometriya/ag-merzlyak-vb-polonskij-ms-yakir-2017' },
		{ name: 'Істоіря України', link: 'https://4book.org/gdz-reshebniki-ukraina/9-klas/istoriya-ukrayini-9-klas-gisem-gdz-2017' },
		{ name: 'Українська мова', link: 'https://vshkole.com/9-klass/reshebniki/ukrayinska-mova/ov-zabolotnij-vv-zabolotnij-2017' },
		{ name: 'Всесвітня історія', link: 'https://shkola.in.ua/3153-hdz-vsesvitnia-istoriia-9-klas-hisem.html' }
  ];

  return (
		<div>
			  <SidebarMenu drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
    <Container>

      <Typography variant="h4" gutterBottom align="center" sx={{ mt: 4, mb: 4, fontWeight: 'bold', color: '#34495e' }}>
        ГДЗ
      </Typography>
      <Grid container spacing={2}>
        {subjects.map((subject, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper elevation={3} sx={{ p: 2, borderRadius: '12px', textAlign: 'center' }}>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: '600', color: '#2c3e50' }}>
                {subject.name}
              </Typography>
              <Typography variant="body1" sx={{ color: '#1e88e5' }}>
                <a href={subject.link} target="_blank" rel="noopener noreferrer">
                  Перейти до ГДЗ
                </a>
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
		</div>
  );
};

export default HomeworkSolutions;