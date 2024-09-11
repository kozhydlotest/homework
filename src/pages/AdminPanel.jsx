import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Typography, Grid, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import data from '../data';
import { API_BASE_URL } from '../config'; // тут

const AdminPanel = () => {
  const [weeks, setWeeks] = useState([]);
  const [selectedWeek, setSelectedWeek] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [homework, setHomework] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/weeks`) // тут 
      .then(response => setWeeks(response.data))
      .catch(error => console.error('Error fetching weeks:', error));
  }, []);

  const handleWeekChange = (event) => setSelectedWeek(event.target.value);
  const handleDayChange = (event) => setSelectedDay(event.target.value);
  const handleSubjectChange = (event) => setSelectedSubject(event.target.value);
  const handleHomeworkChange = (event) => setHomework(event.target.value);
  const handleStartDateChange = (event) => setStartDate(event.target.value);
  const handleEndDateChange = (event) => setEndDate(event.target.value);

  const handleCreateWeek = () => {
    axios.post(`${API_BASE_URL}/api/weeks`, { // тут
      startDate,
      endDate
    })
    .then(response => {
      alert('Week created successfully!');
      setStartDate('');
      setEndDate('');
      setWeeks([...weeks, response.data]);
    })
    .catch(error => console.error('Error creating week:', error));
  };

  const handleSubmit = () => {
    axios.post(`${API_BASE_URL}/api/assignments`, { // тут
      weekId: selectedWeek,
      day: selectedDay,
      subject: selectedSubject,
      homework: homework,
    })
    .then(response => {
      alert('Assignment added successfully!');
      setSelectedWeek('');
      setSelectedDay('');
      setSelectedSubject('');
      setHomework('');
    })
    .catch(error => console.error('Error adding assignment:', error));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Admin Panel
      </Typography>

      <Typography variant="h6" gutterBottom>
        Create New Week
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            margin="normal"
            label="Start Date"
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            InputLabelProps={{ shrink: true }}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            margin="normal"
            label="End Date"
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            InputLabelProps={{ shrink: true }}
            required
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCreateWeek}
        disabled={!startDate || !endDate}
      >
        Create Week
      </Button>

      <FormControl fullWidth margin="normal">
        <InputLabel id="week-select-label">Select Week</InputLabel>
        <Select
          labelId="week-select-label"
          value={selectedWeek}
          onChange={handleWeekChange}
        >
          {weeks.map(week => (
            <MenuItem key={week._id} value={week._id}>
              {`${new Date(week.startDate).toLocaleDateString()} - ${new Date(week.endDate).toLocaleDateString()}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel id="day-select-label">Select Day</InputLabel>
        <Select
          labelId="day-select-label"
          value={selectedDay}
          onChange={handleDayChange}
        >
          {Object.keys(data).map(day => (
            <MenuItem key={day} value={day}>
              {day}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel id="subject-select-label">Select Subject</InputLabel>
        <Select
          labelId="subject-select-label"
          value={selectedSubject}
          onChange={handleSubjectChange}
        >
          {selectedDay && data[selectedDay].map(subject => (
            <MenuItem key={subject} value={subject}>
              {subject}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        fullWidth
        margin="normal"
        label="Homework"
        value={homework}
        onChange={handleHomeworkChange}
        multiline
        rows={4}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={!selectedWeek || !selectedDay || !selectedSubject || !homework}
      >
        Add Assignment
      </Button>
    </Container>
  );
};

export default AdminPanel;
