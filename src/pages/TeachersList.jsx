import React from 'react';
import { Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import SidebarMenu from '../components/SidebarMenu'; 

const teachers = [
    { name: 'Максим Ігорович', subjects: ['Історія України', 'Всесвітня Історія', 'Правознавство'], phone: '+380123456789' },
    { name: 'Михайло Дмитрович', subjects: ['Алгебра', 'Геометрія', 'Фізика'], phone: '+380987654321' },
    { name: 'Галина Ярославівна', subjects: ['українська мова', 'Українська література'], phone: '+380192837465' },
    { name: 'Олена Миколайвна', subjects: ['Біологія', 'Основи здоровя'], phone: '+380564738291' },
    { name: 'Надія Романівна', subjects: ['Хімія'], phone: '+380112233445' },
    { name: 'Оксана Василівна', subjects: ['Трудове навчання'], phone: '+380556677889' },
    { name: 'Інна Василівна', subjects: ['Мистецтво'], phone: '+380998877665' },
    { name: 'Богдан Олегович', subjects: ['Інформатика (|| група)'], phone: '+380223344556' },
    { name: 'Ольга Григорівна', subjects: ['Німецька мова'], phone: '+380334455667' },
    { name: 'Оксана Ярославівна', subjects: ['Географія'], phone: '+380445566778' },
    { name: 'Ярослав Йосивич', subjects: ['Фізична культура'], phone: '+380556677889' },
    { name: 'Леся Теорівна', subjects: ['Зарубіжна література'], phone: '+380667788990' },
    { name: 'Марія Іванівна', subjects: ['Англійська мова'], phone: '+380778899001' },
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
            <Container sx={{ paddingTop: 4 }}>
                <Typography variant="h3" gutterBottom align="center">
                    Список Вчителів
                </Typography>
                <div className="input-field col s12" style={{ marginBottom: '24px' }}>
                    <input
                        id="search_input" 
                        type="text" 
                        className="validate" 
                        value={search} 
                        onChange={handleSearchChange}
                        style={{
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                            padding: '8px 12px',
                            width: '100%',
                            boxSizing: 'border-box',
                        }}
                    />
                    <label htmlFor="search_input" style={{ color: '#999' }}>Пошук по предметам</label>
                </div>
                <Grid container spacing={4}>
                    {filteredTeachers.map((teacher, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card variant="outlined" sx={{ borderRadius: 2, height: '400px', position: 'relative' }}>
                                <CardContent sx={{ height: '100%' }}>
                                    <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
                                        {teacher.name}
                                    </Typography>
                                    <List>
                                        {teacher.subjects.map((subject, idx) => (
                                            <ListItem key={idx}>
                                                <ListItemText primary={subject} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                                <div style={{
                                    position: 'absolute',
                                    bottom: '16px',
                                    right: '16px',
                                    color: '#666',
                                    fontSize: '14px'
                                }}>
                                    {teacher.phone}
                                </div>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default TeachersList;
