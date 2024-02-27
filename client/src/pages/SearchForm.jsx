import React from "react";
import { useEffect, useState } from "react";

export default function SearchForm() {

    const [events, setEvents] = useState([]);
    const [hobbies, setHobbies] = useState([]);
    const [input, setInput] = useState({ event_location: "", skill_level: "", hobby_id: "" });


    useEffect(() => {
      getEvents();
    }, []);

    useEffect(() => {
      getHobbies();
    }, []);

    const handleChange = (event) => {
      setInput((state) => ({
        ...state,
        [event.target.name]: event.target.value,
      }));
    };

    const getHobbies = () => {
      fetch("/api/hobbies")
      .then((response) => response.json())
      .then((hobbies) => { setHobbies(hobbies)
      })
      .catch((error) => {
        console.log(error);
    });
    };

    const getEvents = () => {
      // const { event_location } = locInput;
      const urlSearch = `/api/events?event_location=${input.event_location}&skill_level=${input.skill_level}&hobby_id=${input.hobby_id}`
      // get events filtered by input
      fetch(urlSearch)
      .then((response) => response.json())
      .then((events) => {
        setEvents(events)
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
          <label htmlFor="event_location">Event Location</label>
          <input
            name="event_location"
            id="event_location"
            type="text"
            className="info"
            value={input.event_location}
            onChange={handleChange}
          />
          <label htmlFor="skill_level">Skill Level</label>
          <input
            name="skill_level"
            id="skill_level"
            type="text"
            className="info"
            value={input.skill_level}
            onChange={handleChange}
          />
          <div>
          <label htmlFor="hobby_id">
      Hobby Category
       <select name="hobby_id"
            id="hobby_id"
            type="number"
            value={input.hobby_id}
            onChange={handleChange}>
           {hobbies.map((hobby) => (
      <option key={hobby.id} value={hobby.id}>
           {hobby.hobby_category}
      </option>
    ))}
       </select>
   </label>
   </div>

       <button className="btn btn-secondary">Submit</button>
        </form>
        <div>
        {events.map((event) => (
          <div key={event.id}>
            <h2>{event.event_name}</h2>
            <p>{event.event_description}</p>
            <p>{event.event_location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}