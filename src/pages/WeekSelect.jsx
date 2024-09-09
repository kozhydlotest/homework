import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import { API_BASE_URL } from '../config'; // тут

const WeekSelect = () => {
  const [weeks, setWeeks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/weeks`) // тут
      .then(response => setWeeks(response.data))
      .catch(error => console.error('Error fetching weeks:', error));
  }, []);

  const handleSelect = (weekId) => {
    navigate(`/schedule/${weekId}`);
  };

  return (
    <div className="container">
      <h2 className="center-align" style={{ margin: '30px 0', fontWeight: '600', color: '#2c3e50' }}>
        Оберіть тиждень
      </h2>
      <div className="row">
        {weeks.map(week => (
          <div key={week._id} className="col s12 m4">
            <div 
              className="card hoverable"
              onClick={() => handleSelect(week._id)}
              style={{
                cursor: 'pointer',
                borderRadius: '10px',
                backgroundColor: '#f7f9fb',
                transition: 'transform 0.2s ease-in-out',
              }}
            >
              <div className="card-content" style={{ padding: '20px' }}>
                <span className="card-title" style={{ fontSize: '18px', color: '#34495e', fontWeight: '500' }}>
                  {new Date(week.startDate).toLocaleDateString()} - {new Date(week.endDate).toLocaleDateString()}
                </span>
              </div>
              <div className="card-action" style={{ borderTop: '1px solid #ecf0f1' }}>
                <button 
                  className="btn-small waves-effect waves-light" 
                  style={{ backgroundColor: '#3498db', borderRadius: '20px' }}
                >
                  Переглянути
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekSelect;
