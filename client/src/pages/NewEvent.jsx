import React from 'react';
import { useEffect, useState } from "react";


export default function NewEvent() {

    const [newEvent, setNewEvent] = useState({
  });
  const [input, setInput] = useState({
event_name: "",
  event_location: "",
  event_description: "",
});


  async function addEvent() {
    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      const data = await response.json();
      console.log(data);

    //   setNewEvent(data);
    } catch (err) {
      console.log(err);
    }
  };

  function handleChange(event){
    const{value, name} = event.target;
    setInput((state) => ({
      ...state,
      [name]: value,
    }));
  };

  function handleSubmit(e){
    e.preventDefault()
    addEvent()
  }

  return (
    <div>
        <h1>
        Create New Event
        </h1>
        <p>Can't find the exact activity you were after? Why not try and create it yourself!</p>
        <form onSubmit={handleSubmit}>
        <label for="event_name">Event Name</label>
        <input
            name="event_name"
            id="event_name"
            type="text"
            value={input.event_name}
            onChange={handleChange}
          />
           <label for="event_description">Event Description</label>
          <textarea
            name="event_description"
            id="event_description"
            type="text"
            value={input.event_description}
            onChange={handleChange}
          />
           <label for="event_location">Event Location</label>
        <input
            name="event_location"
            id="event_location"
            type="text"
            value={input.event_location}
            onChange={handleChange}
          />
          <button>Create New Event</button>
        </form>
        {input.event_location}



    </div>
  )
}
