import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';
import SidebarMenu from '../components/SidebarMenu'; 
import { PhoneIphone, Menu } from '@mui/icons-material';

const MobileInstruction = () => {
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
        
        <Typography variant="body1" paragraph>
          <strong>Додати сайт на головний екран Android:</strong>
          <ol>
            <li>Відкрийте браузер Chrome на вашому Android пристрої.</li>
            <li>Перейдіть на наш сайт.</li>
            <li>Натисніть на іконку меню (три вертикальні точки) у верхньому правому куті екрана.</li>
            <li>Виберіть опцію <strong>"Додати на головний екран"</strong> або <strong>"Add to Home Screen"</strong>.</li>
            <li>Введіть назву для ярлика, якщо потрібно, і натисніть <strong>"Додати"</strong>.</li>
            <li>Тепер іконка нашого сайту з’явиться на головному екрані вашого Android пристрою.</li>
          </ol>
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Додати сайт на головний екран iPhone:</strong>
          <ol>
            <li>Відкрийте браузер Safari на вашому iPhone.</li>
            <li>Перейдіть на наш сайт.</li>
            <li>Натисніть на кнопку <strong>"Поділитися"</strong> (іконка квадрат з стрілкою вверх) у нижній частині екрану.</li>
            <li>У меню, що з'явиться, виберіть опцію <strong>"Додати на головний екран"</strong> або <strong>"Add to Home Screen"</strong>.</li>
            <li>Введіть назву для ярлика, якщо потрібно, і натисніть <strong>"Додати"</strong>.</li>
            <li>Тепер іконка нашого сайту з’явиться на головному екрані вашого iPhone.</li>
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

export default MobileInstruction;
