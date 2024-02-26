import React from "react";
import { useEffect, useState } from "react";

export default function SearchForm() {
  const [events, setEvents] = useState([]);
  const [input, setInput] = useState({ event_location: "" });

  useEffect(() => {
    getEvents();
  }, []);

  const handleChange = (event) => {
    setInput((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const getEvents = () => {
    const { event_location } = input;
    // get events filtered by input
    fetch("/api/events?event_location=" + event_location)
      .then((response) => response.json())
      .then((events) => {
        setEvents(events);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getEvents();
  };

  return (
    <div>
      <h1> Search Form </h1>
      <form onSubmit={handleSubmit}>
        <label for="event_location">Event Location</label>
        <input
          name="event_location"
          id="event_location"
          type="text"
          value={input.event_location}
          onChange={handleChange}
        />
        {/* Event Price
        <input
          name="event_price"
          type="range"
          min="1"
          max="100"
          value={input}
          onChange={(e) => handleChange(e)}
        /> */}
        {/* Event Date <input name="event_date" type="date" value={input} onChange={(e) => handleChange(e)}/>

            Event Time <input name="event_time" type="time" onChange={(e) => handleChange(e)}/>

            Indoors or outdoors <input name="event_enviro" type="checkbox" onChange={(e) => handleChange(e)}/>
                        
           Solo or group <input name="event_crowd" type="checkbox" onChange={(e) => handleChange(e)}/>

            Skill level <input name="skill_level" type="checkbox" onChange={(e) => handleChange(e)}/>

           Own equipment needed <input name="equip_needed" type="checkbox" onChange={(e) => handleChange(e)}/> */}
        <button>Submit</button>
      </form>

      <div>
        {events.map((event) => (
          <div>
            <h2>{event.event_name}</h2>
            <p>{event.event_description}</p>
            <p>{event.event_location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
