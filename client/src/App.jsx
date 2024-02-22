import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Hobbies from "./pages/Hobbies";
import Events from "./pages/Events";

export default function App() {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState([]);
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {getEvents();}, []);

  const getEvents = () => {
    fetch("/api/events")
    .then((response) => response.json())
    .then((events) => { setEvents(events)
      console.log(events);
    })
    .catch((error) => {
      console.log(error);
  });
  }

  return (
    <div className = "App">
      <h1>
        Saturn's Always Somewhere 
      </h1>

      <Routes>
        <Route path="/all-events" element={<Events />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="*" element={<Error404View />} />
      </Routes>
      <form>
        <input>
        </input><button>Search</button>
      </form>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.event_name} {event.event_description}
          </li>
        ))}
      </ul>
    </div>
  )
};
