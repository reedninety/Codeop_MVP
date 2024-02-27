import React from "react";
import { useEffect, useState } from "react";

export default function SearchForm() {

    const [events, setEvents] = useState([]);
    const [hobbies, setHobbies] = useState([]);
    const [input, setInput] = useState({ event_location: "", skill_level: "", hobby_id: "", event_price: "", equip_needed: "", event_description: ""});


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
      const urlSearch = `/api/events?event_location=${input.event_location}&skill_level=${input.skill_level}&hobby_id=${input.hobby_id}&event_price=${input.event_price}&equip_needed=${input.equip_needed}&event_description=${input.event_description}`
      // get events filtered by input
      fetch(urlSearch)
      .then((response) => response.json())
      .then((events) => {
        setEvents(events)
        console.log(events)
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
            placeholder="City Name"
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
          <label htmlFor="event_description">Key Word</label>
          <input
            name="event_description"
            placeholder="Key Word"
            id="event_description"
            type="text"
            className="info"
            value={input.event_description}
            onChange={handleChange}
          />
          <div>
          <label htmlFor="hobby_id">
           Hobby Category</label>
            <select name="hobby_id"
              id="hobby_id"
              value={input.hobby_id}
              onChange={handleChange}>
              <option placeholder="choose Hobby Category">Select Hobby Category</option>
              {hobbies.map((hobby) => (
              <option key={hobby.id} value={hobby.id}>
              {hobby.hobby_category}
               </option>
               ))}
            </select>
          </div>
          <label htmlFor="event_price">
            Price Range €0-{input.event_price}</label>
            <input type="range" 
            name="event_price" 
            className="form-range" 
            min="0" 
            max="100" 
            step="1" 
            value={input.event_price} 
            onChange={handleChange} 
            id="event_price">
            </input>

          <label htmlFor="equip_needed"></label>
            Own equipment needed
            <select name="equip_needed"
            id="equip_needed"
            value={input.equip_needed}
            onChange={handleChange}>
           <option value={"1"}>
           Yes
           </option>
           <option value={"0"}>
           No
           </option>
           </select>

          <label htmlFor="event_date">Event Date</label>
          <input
            name="event_date"
            placeholder="Event Date"
            id="event_date"
            type="date"
            className="info"
            value={input.event_date}
            onChange={handleChange}
          />

<label htmlFor="event_time">Event Time</label>
          <input
            name="event_time"
            placeholder="Event Time"
            id="event_time"
            type="time"
            className="info"
            value={input.event_time}
            onChange={handleChange}
          />

      
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