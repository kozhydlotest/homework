
import React from 'react';
import { Container, Typography, Grid, Paper, Box, IconButton } from '@mui/material';
import SidebarMenu from '../components/SidebarMenu'; // Імпорт нового компоненту
import MenuIcon from '@mui/icons-material/Menu';

const BooksOnline = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const subjects = [
    { name: 'Інформатика', link: 'https://pidruchnyk.com.ua/1046-informatika-9-klas-ryvkind-2017.html' },
    { name: 'Німецька мова', link: 'https://vshkole.com/9-klass/reshebniki/fizika/vg-baryahtar-fya-bozhinova-so-dovgij-2017' },
    { name: 'Основи здоровя', link: 'https://shkola.in.ua/819-osnovy-zdorov-ia-9-klas-tahlina-2017.html' },
    { name: 'Географія', link: 'https://pidruchnyk.com.ua/993-geografiya-9-klas-boyko.html' },
		{ name: 'Геометрія', link: 'https://pidruchnyk.com.ua/996-geometriya-merzlyak-9-klas-2017.html' },
		{ name: 'Хімія', link: 'https://pidruchnyk.com.ua/972-himiya-9-klas-savchyn.html' },
		{ name: 'Біологія', link: 'https://shkola.in.ua/739-biolohiia-9-klas-zadorozhnyi-2017.html' },
		{ name: 'Історія України', link: 'https://shkola.in.ua/787-istoriia-ukrainy-9-klas-hisem-2017.html' },
    { name: 'Українська Література', link: 'https://pidruchnyk.com.ua/967-ukrliteratura-9-klas-avramenko-2017.html' },
    { name: 'Всесвітня Історія', link: 'https://shkola.in.ua/742-vsesvitnia-istoriia-9-klas-hisem-2017.html' },
    { name: 'Алгебра', link: 'https://pidruchnyk.com.ua/982-algebra-merzlyak-9-klas-2017.html' },
    { name: 'Фізика', link: 'https://shkola.in.ua/864-fizyka-9-klas-bar-iakhtar-2017.html' },
    { name: 'Українська Мова', link: 'https://shkola.in.ua/858-ukrainska-mova-9-klas-zabolotnyi-2017.html' },
    { name: 'Мистецтво', link: 'https://pidruchnyk.com.ua/1011-mystectvo-masol-9-klas.html' },
    { name: 'Зарубіжна література', link: 'https://pidruchnyk.com.ua/1004-zarubizhna-voloschuk-9-klas.html' }
  ];

  return (
		<div>
			  <SidebarMenu drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
    <Container>

      <Typography variant="h4" gutterBottom align="center" sx={{ mt: 4, mb: 4, fontWeight: 'bold', color: '#34495e' }}>
        Книги онлайн
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
                  Читати
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

export default BooksOnline;