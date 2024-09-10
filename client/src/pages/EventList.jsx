import React from 'react'
import { useEffect, useState } from 'react'
import "../App.css";

//SIMONE YOU CAN IGNORE THIS PAGE - THIS IS FROM AN EARLIER VERSION OF THE PROJECT BUT DOES NOTHING NOW!!
export default function EventList() {

    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState([]);

    useEffect(() => {getEvents();}, []);
    
    const getEvents = () => {
        fetch("/api/events")
        .then((response) => response.json())
        .then((events) => { setEvents(events)
        })
        .catch((error) => {
          console.log(error);
      });
      }
  return (
    <div>
        <h1 className="homepage-title">All Upcoming Events</h1>
   <ul>
        {events.map((event) => (
          <h3 key={event.id}>
            {event.eventName} 
            <p>{event.eventDescription} </p>
          </h3>
        ))}
      </ul>

        </div>
  )
}
