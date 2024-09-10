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
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <MUIList>
        <ListItem button component={Link} to="/">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Головна сторінка" />
        </ListItem>
        <ListItem button component="a" href="https://t.me/Odnoclainicki_8abot">
          <ListItemIcon><TelegramIcon /></ListItemIcon>
          <ListItemText primary="Телеграм Бот" />
        </ListItem>
        <ListItem button component={Link} to="/bell-schedule">
          <ListItemIcon><NotificationImportantIcon /></ListItemIcon>
          <ListItemText primary="Розклад дзвінків" />
        </ListItem>
        <ListItem button component={Link} to="/homework-solutions">
          <ListItemIcon><AssignmentIcon /></ListItemIcon>
          <ListItemText primary="ГДЗ" />
        </ListItem>
        <ListItem button component={Link} to="/books">
          <ListItemIcon><MenuBookIcon /></ListItemIcon>
          <ListItemText primary="Книги Онайлн" />
        </ListItem>
        <ListItem button component={Link} to="/teachers">
          <ListItemIcon><PeopleAltIcon /></ListItemIcon>
          <ListItemText primary="Вчителі" />
        </ListItem>
        <ListItem button component={Link} to="/instructions">
          <ListItemIcon><InfoIcon /></ListItemIcon>
          <ListItemText primary="Інструкція" />
        </ListItem>
      </MUIList>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#1e88e5' }}>
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
