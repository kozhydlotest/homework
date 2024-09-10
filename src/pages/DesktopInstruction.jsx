import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';
import SidebarMenu from '../components/SidebarMenu'; 
import { DesktopMac, Menu } from '@mui/icons-material';

const DesktopInstruction = () => {
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
          Інструкція: 
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Додати сайт на робочий стіл (Windows):</strong>
          <ol>
            <li>Відкрийте браузер Google Chrome на вашому комп'ютері.</li>
            <li>Перейдіть на наш сайт.</li>
            <li>Натисніть на значок меню (три крапки) у верхньому правому куті браузера.</li>
            <li>Виберіть опцію <strong>"Додати на робочий стіл"</strong> або <strong>"Add to Desktop"</strong>.</li>
            <li>Введіть назву для ярлика, якщо потрібно, і натисніть <strong>"Додати"</strong>.</li>
            <li>Тепер іконка нашого сайту з’явиться на робочому столі вашого комп'ютера.</li>
          </ol>
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Додати сайт на робочий стіл (macOS):</strong>
          <ol>
            <li>Відкрийте браузер Safari на вашому Mac.</li>
            <li>Перейдіть на наш сайт.</li>
            <li>Натисніть на меню <strong>"Файл"</strong> у верхньому меню браузера.</li>
            <li>Виберіть опцію <strong>"Додати до доку"</strong> або <strong>"Add to Dock"</strong>.</li>
            <li>Тепер іконка нашого сайту з’явиться на вашому Dock (панелі завдань).</li>
          </ol>
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Як користуватися боковим меню:</strong>
          <ol>
            <li>Щоб відкрити бокове меню, натисніть на іконку <Menu /> у верхньому лівому куті екрана.</li>
            <li>Меню відкриється зліва, де ви побачите список доступних сторінок.</li>
            <li>Натисніть на будь-який пункт меню, щоб перейти на відповідну сторінку.</li>
          </ol>
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Що роблять різні сторінки в меню:</strong>
          <ul>
            <li><strong>Головна</strong> - Це домашня сторінка нашого сайту.</li>
            <li><strong>Розклад Дзвінків</strong> - Перегляньте розклад дзвінків.</li>
            <li><strong>ГДЗ</strong> - Тут ти знайдеш відповіді до завдань.</li>
            <li><strong>Інструкції</strong> - Перегляньте інструкції по користуванню сайтом.</li>
            <li><strong>Телеграм бот</strong> - Це посилання на телеграм бота в якому ви можете зручно дивитися розклад.</li>
            <li><strong>Вчителі</strong> - Тут ви можете знайти ім'я вчителя та його номер телефону.</li>
            <li><strong>Книги Онлайн</strong> - Тут можна читати та дивитися книги онлайн.</li>
          </ul>
        </Typography>
      </Container>
    </div>
  );
};

export default DesktopInstruction;
