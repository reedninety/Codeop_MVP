import React from "react";
import { useEffect, useState } from "react";

export default function SearchForm() {


    const [events, setEvents] = useState([]);
    const [hobbies, setHobbies] = useState([]);
    //all inputs only work if they are set as empty strings here
    const [input, setInput] = useState({ event_location: "", skill_level: "", hobby_id: "", event_price: "", equip_needed: "", event_description: ""});

//Shows all events and all hobbies (in it's dropdown) when the page is loaded
    useEffect(() => {
      getEvents();
    }, []);

    useEffect(() => {
      getHobbies();
    }, []);

//manipulates the input state as the user types/changes the form
    const handleChange = (event) => {
      setInput((state) => ({
        ...state,
        [event.target.name]: event.target.value,
      }));
    };

//fetches all hobbies from database
    const getHobbies = () => {
      fetch("/api/hobbies")
      .then((response) => response.json())
      .then((hobbies) => { setHobbies(hobbies)
      })
      .catch((error) => {
        console.log(error);
    });
    };

//fetches all events which then can be filtered. if the specified filters exist in the query, then they are applied to the fetch
    const getEvents = () => {
      const urlSearch = `/api/events?event_location=${input.event_location}&skill_level=${input.skill_level}&hobby_id=${input.hobby_id}&event_price=${input.event_price}&equip_needed=${input.equip_needed}&event_description=${input.event_description}`
      fetch(urlSearch)
      .then((response) => response.json())
      .then((events) => {
        setEvents(events)
        //test console log
        console.log(events)
      })
      .catch((error) => {
        console.log(error);
      });
    };
  
    // prevents page refreshing immediately and runs get events
    const handleSubmit = (event) => {
      event.preventDefault();
      getEvents();
    };
  
    return (
      <div>
        <h1 className="homepage-title mt-3 mb-4"> Search Form </h1>
        <form onSubmit={handleSubmit}>
          <div>
          <label htmlFor="event_location" className="pr-3">Event Location </label>
          <input
            name="event_location"
            placeholder="City Name"
            id="event_location"
            type="text"
            className="rounded mb-3"
            value={input.event_location}
            onChange={handleChange}
          />
          </div>
          <div>
          <label htmlFor="skill_level" className="pr-3">Skill Level </label>
          <input
            name="skill_level"
            id="skill_level"
            placeholder="Beginner, intermediate..."
            type="text"
            className="rounded mb-3"
            value={input.skill_level}
            onChange={handleChange}
          />
          </div>
          <div>
          <label htmlFor="event_description" className="pr-3">Key Word </label>
          <input
            name="event_description"
            placeholder="Key Word"
            id="event_description"
            type="text"
            className="rounded mb-3"
            value={input.event_description}
            onChange={handleChange}
          />
          </div>
          <div>
          <label htmlFor="hobby_id" className="pr-3">
           Hobby Category </label>
            <select name="hobby_id"
              id="hobby_id"
              className="rounded mb-3"
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
          <div>
          <label htmlFor="event_price" className="pr-3">
            Price Range €0-{input.event_price}</label>
            <input type="range" 
            name="event_price" 
            className="range-custom mb-3" 
            min="0" 
            max="50" 
            step="1" 
            value={input.event_price} 
            onChange={handleChange} 
            id="event_price">
            </input>
            </div>
<div>
            <label htmlFor="equip_needed" className="pr-3"></label>
            Own equipment needed 
            <select name="equip_needed"
            id="equip_needed"
            className="rounded mb-3 pr-3"
            value={input.equip_needed}
            onChange={handleChange}>
              <option placeholder="choose option" className="option-custom">Please Choose</option>
           <option value={"1"}>
           Yes
           </option>
           <option value={"0"}>
           No
           </option>
           </select>
           </div>

<div>
          <label htmlFor="event_date"></label>
          <span className="pr-3">Event Date </span>
          <input
            name="event_date"
            placeholder="Event Date"
            id="event_date"
            type="date"
            className="rounded mb-3"
            value={input.event_date}
            onChange={handleChange}
          />
          </div>
<div>
<label htmlFor="event_time" className="pr-3">Event Time </label>
          <input
            name="event_time"
            placeholder="Event Time"
            id="event_time"
            type="time"
            className="rounded mb-3"
            value={input.event_time}
            onChange={handleChange}
          />
</div>
        <div>
       <button className="button">Submit</button>
       </div>
        </form>

        <div className="row mb-4">
        {events.map((event) => (
          <div key={event.id} className="container rounded p-5 my-5 bg col-4 mb-4">
            <h2>{event.event_name}</h2>
            <p>{event.event_description}</p>
            <p>{event.event_location}</p>
            <p>€{event.event_price}</p>
          </div>
        ))}
      </div>
      </div>

  );
}