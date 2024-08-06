import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventItem from './eventItem.js';

const About = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // URL of the API
    const apiUrl = 'http://localhost:8080/api/skillShaksAchievements';

    const fetchEvents = async () => {
      try {
        const response = await axios.get(apiUrl);
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching the events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className='eventItemContainer'>
      {events.map((event, index) => (
        <EventItem
          key={index}
          imgUrl={event.imgUrl}
          title={event.title}
          description={event.description}
        />
      ))}
    </div>
  );
};

export default About;
