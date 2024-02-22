import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState([]);
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {getEvents();}, []);

  // const getEvents = () => {
  //   fetch("/events")
  //   .then((response) => response.json())
  //   .then((events) => { setEvents(events)
  //     console.log(events);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  // });
  // }

  const getEvents = async () => {
    let options = {
      method: "GET",
    };

    try {
      let response = await fetch(`/users/events`, options);
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log("hello");
        setEvents(data);
      } else {
        console.log(`server error: ${response.status} ${response.statusText}`);
        console.log("hi");
      }
    } catch (err) {
      console.log(`network error: ${err.message}`);
      console.log("hola");
    }
  };
  return (
    <div className = "App">
      <h1>
        MVP Homepage
      </h1>
      <form>
        <input>
        </input><button>Search</button>
      </form>
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
