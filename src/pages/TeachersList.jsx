// import React from 'react';
// import { Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
// import SidebarMenu from '../components/SidebarMenu'; 

// const teachers = [
//     { name: 'Максим Ігорович', subjects: ['Історія України', 'Всесвітня Історія', 'Правознавство'], phone: '+380996379525' },
//     { name: 'Михайло Дмитрович', subjects: ['Алгебра', 'Геометрія', 'Фізика'], phone: '+380961688485' },
//     { name: 'Галина Ярославівна', subjects: ['українська мова', 'Українська література'], phone: '+380982544014' },
//     { name: 'Олена Миколайвна', subjects: ['Біологія', 'Основи здоровя'], phone: '+380963527798' },
//     { name: 'Надія Романівна', subjects: ['Хімія'], phone: '' },
//     { name: 'Оксана Василівна', subjects: ['Трудове навчання'], phone: '+380985425920' },
//     { name: 'Інна Василівна', subjects: ['Мистецтво'], phone: '+380962085188' },
//     { name: 'Богдан Олегович', subjects: ['Інформатика (|| група)'], phone: '+380951189789' },
//     { name: 'Ольга Григорівна', subjects: ['Німецька мова'], phone: '+380679001827' },
//     { name: 'Оксана Ярославівна', subjects: ['Географія'], phone: '' },
//     { name: 'Ярослав Йосивич', subjects: ['Фізична культура'], phone: '+380972473344' },
//     { name: 'Леся Теорівна', subjects: ['Зарубіжна література'], phone: '+38989202934' },
//     { name: 'Марія Іванівна', subjects: ['Англійська мова'], phone: '' },
// ];

// const TeachersList = () => {
//     const [drawerOpen, setDrawerOpen] = React.useState(false);
//     const [search, setSearch] = React.useState('');
    
//     const toggleDrawer = (open) => (event) => {
//         if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//             return;
//         }
//         setDrawerOpen(open);
//     };

//     const handleSearchChange = (event) => {
//         setSearch(event.target.value);
//     };

//     const filteredTeachers = teachers.filter(teacher =>
//         teacher.subjects.some(subject =>
//             subject.toLowerCase().includes(search.toLowerCase())
//         )
//     );

//     return (
//         <div>
//             <SidebarMenu drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
//             <Container sx={{ paddingTop: 4 }}>
//                 <Typography variant="h3" gutterBottom align="center">
//                     Список Вчителів
//                 </Typography>
//                 <div className="input-field col s12" style={{ marginBottom: '24px' }}>
//                     <input
//                         id="search_input" 
//                         type="text" 
//                         className="validate" 
//                         value={search} 
//                         onChange={handleSearchChange}
//                         style={{
//                             borderRadius: '4px',
//                             border: '1px solid #ccc',
//                             padding: '8px 12px',
//                             width: '100%',
//                             boxSizing: 'border-box',
//                         }}
//                     />
//                     <label htmlFor="search_input" style={{ color: '#999' }}>Пошук по предметам</label>
//                 </div>
//                 <Grid container spacing={4}>
//                     {filteredTeachers.map((teacher, index) => (
//                         <Grid item xs={12} sm={6} md={4} key={index}>
//                             <Card variant="outlined" sx={{ borderRadius: 2, height: '400px', position: 'relative' }}>
//                                 <CardContent sx={{ height: '100%' }}>
//                                     <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
//                                         {teacher.name}
//                                     </Typography>
//                                     <List>
//                                         {teacher.subjects.map((subject, idx) => (
//                                             <ListItem key={idx}>
//                                                 <ListItemText primary={subject} />
//                                             </ListItem>
//                                         ))}
//                                     </List>
//                                 </CardContent>
//                                 <div style={{
//                                     position: 'absolute',
//                                     bottom: '16px',
//                                     right: '16px',
//                                     color: '#666',
//                                     fontSize: '14px'
//                                 }}>
//                                     {teacher.phone}
//                                 </div>
//                             </Card>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Container>
//         </div>
//     );
// };

// export default TeachersList;


import React from 'react';
import { Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemText, Box, InputBase } from '@mui/material';
import SidebarMenu from '../components/SidebarMenu'; 

const teachers = [
    { name: 'Максим Ігорович', subjects: ['Історія України', 'Всесвітня Історія', 'Правознавство'], phone: '+380996379525' },
    { name: 'Михайло Дмитрович', subjects: ['Алгебра', 'Геометрія', 'Фізика'], phone: '+380961688485' },
    { name: 'Галина Ярославівна', subjects: ['українська мова', 'Українська література'], phone: '+380982544014' },
    { name: 'Олена Миколайвна', subjects: ['Біологія', 'Основи здоровя'], phone: '+380963527798' },
    { name: 'Надія Романівна', subjects: ['Хімія'], phone: '' },
    { name: 'Оксана Василівна', subjects: ['Трудове навчання'], phone: '+380985425920' },
    { name: 'Інна Василівна', subjects: ['Мистецтво'], phone: '+380962085188' },
    { name: 'Богдан Олегович', subjects: ['Інформатика (|| група)'], phone: '+380951189789' },
    { name: 'Ольга Григорівна', subjects: ['Німецька мова'], phone: '+380679001827' },
    { name: 'Оксана Ярославівна', subjects: ['Географія'], phone: '' },
    { name: 'Ярослав Йосивич', subjects: ['Фізична культура'], phone: '+380972473344' },
    { name: 'Леся Теорівна', subjects: ['Зарубіжна література'], phone: '+38989202934' },
    { name: 'Марія Іванівна', subjects: ['Англійська мова'], phone: '' },
];

const TeachersList = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [search, setSearch] = React.useState('');
    
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const filteredTeachers = teachers.filter(teacher =>
        teacher.subjects.some(subject =>
            subject.toLowerCase().includes(search.toLowerCase())
        )
    );

    return (
        <div>
            <SidebarMenu drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
        
        <Box
            sx={{
                minHeight: '100vh',
                 background: 'linear-gradient(135deg, #6A11CB 0%, #2575FC 100%)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 3,
            }}
        >
            <Container sx={{ paddingTop: 4 }}>
                <Typography
                    variant="h3"
                    gutterBottom
                    align="center"
                    sx={{ color: '#fff', textShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)' }} // Тінь для заголовка
                >
                    Список Вчителів
                </Typography>
                
                {/* Інпут-поле для пошуку */}
                <Box
                    sx={{
                        mb: 4,
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                    }}
                >
                    <InputBase
                        id="search_input"
                        placeholder="Пошук по предметам"
                        value={search}
                        onChange={handleSearchChange}
                        sx={{
                            width: '100%',
                            maxWidth: 600,
                            backgroundColor: 'rgba(255, 255, 255, 0.2)', // Напівпрозорий фон
                            backdropFilter: 'blur(10px)',
                            padding: '10px 16px',
                            borderRadius: '8px',
                            color: '#fff',
                            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // Тінь для поля
                            border: '1px solid rgba(255, 255, 255, 0.3)', // Легкий бордер
                        }}
                    />
                </Box>

                {/* Список вчителів */}
                <Grid container spacing={4}>
                    {filteredTeachers.map((teacher, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Напівпрозорий фон для картки
                                    backdropFilter: 'blur(10px)', // Розмиття фону
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // Тінь
                                    height: '100%', 
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    color: '#fff',
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h5" component="div" sx={{ mb: 2, textShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)' }}>
                                        {teacher.name}
                                    </Typography>
                                    <List>
                                        {teacher.subjects.map((subject, idx) => (
                                            <ListItem key={idx}>
                                                <ListItemText primary={subject} sx={{ color: '#fff', textShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)' }} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                                <Box sx={{ p: 2, textAlign: 'right', color: '#fff', textShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)' }}>
                                    {teacher.phone || 'Немає номера'}
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
        </div>
    );
};

export default TeachersList;
