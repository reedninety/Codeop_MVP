import React from 'react'
import { useEffect, useState } from 'react'

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
        <h1>All Upcoming Events</h1>
   <ul>
        {events.map((event) => (
          <h3 key={event.id}>
            {event.event_name} 
            <p>{event.event_description} </p>
          </h3>
        ))}
      </ul>

        </div>
  )
}
