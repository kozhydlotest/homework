import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, SwipeableDrawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MUIList from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import TelegramIcon from '@mui/icons-material/Telegram';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import InfoIcon from '@mui/icons-material/Info';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Link } from 'react-router-dom';

const SidebarMenu = ({ drawerOpen, toggleDrawer }) => {
  const drawerList = () => (
    <Box
      sx={{ width: 250, background: 'linear-gradient(135deg, #6A11CB 0%, #2575FC 100%)',height: '100vh', }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <MUIList>
        <ListItem button component={Link} to="/">
          <ListItemIcon><HomeIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Головна сторінка" sx={{ color: 'white' }} />
        </ListItem>
        <ListItem button component="a" href="https://t.me/Odnoclainicki_8abot">
          <ListItemIcon><TelegramIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Телеграм Бот"  sx={{ color: 'white' }}/>
        </ListItem>
        <ListItem button component={Link} to="/bell-schedule">
          <ListItemIcon><NotificationImportantIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Розклад дзвінків" sx={{ color: 'white' }} />
        </ListItem>
        <ListItem button component={Link} to="/homework-solutions">
          <ListItemIcon><AssignmentIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="ГДЗ" sx={{ color: 'white' }} />
        </ListItem>
        <ListItem button component={Link} to="/books">
          <ListItemIcon><MenuBookIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Книги Онайлн" sx={{ color: 'white' }} />
        </ListItem>
        <ListItem button component={Link} to="/teachers">
          <ListItemIcon><PeopleAltIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Вчителі" sx={{ color: 'white' }} />
        </ListItem>
        <ListItem button component={Link} to="/instructions">
          <ListItemIcon><InfoIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Інструкція" sx={{ color: 'white' }} />
        </ListItem>
      </MUIList>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#6610f2' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            9 - A
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {drawerList()}
      </SwipeableDrawer>
    </>
  );
};

export default SidebarMenu;
