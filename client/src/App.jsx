import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState([]);
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {getEvents();}, []);

  const getEvents = () => {
    fetch("/events")
    .then((response) => response.json())
    .then((events) => { setEvents(events)
    })
    .catch((error) => {console.log(error);
  });
  }

  return (
    <div className = "App">
      <h1>
        MVP Homepage
      </h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.event_name} {event.description}
          </li>
        ))}
      </ul>
    </div>
  )
};
