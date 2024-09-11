import React from "react";
import { useEffect, useState } from "react";

export default function SearchForm() {


    const [events, setEvents] = useState([]);
    const [categories, setCategories] = useState([]);
    //all inputs only work if they are set as empty strings here
    const [input, setInput] = useState({ eventLocation: "", skillLevel: "", categoryId: "", eventPrice: "", equipNeeded: "", eventDescription: ""});

//Shows all events and all hobbies (in it's dropdown) when the page is loaded
    useEffect(() => {
      getEvents();
      getCategories();
    }, []);

//manipulates the input state as the user types/changes the form
    const handleChange = (event) => {
      setInput((state) => ({
        ...state,
        [event.target.name]: event.target.value,
      }));
    };

//fetches all hobbies from database
    const getCategories = () => {
      fetch("/api/hobbies/types")
      .then((response) => response.json())
      .then((categories) => { setCategories(categories)
      })
      .catch((error) => {
        console.log(error);
    });
    };

//fetches all events which then can be filtered. if the specified filters exist in the query, then they are applied to the fetch
    const getEvents = () => {
      const urlSearch = `/api/events?eventLocation=${input.eventLocation}&skillLevel=${input.skillLevel}&categoryId=${input.categoryId}&eventPrice=${input.eventPrice}&equipNeeded=${input.equipNeeded}&eventDescription=${input.eventDescription}`
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
          <label htmlFor="eventLocation" className="pr-3">Event Location </label>
          <input
            name="eventLocation"
            placeholder="City Name"
            id="eventLocation"
            type="text"
            className="rounded mb-3"
            value={input.eventLocation}
            onChange={handleChange}
          />
          </div>
          <div>
          <label htmlFor="skillLevel" className="pr-3">Skill Level </label>
          <select
            name="skillLevel"
            id="skillLevel"
            placeholder="Beginner, intermediate..."
            type="text"
            className="rounded mb-3"
            value={input.skillLevel}
            onChange={handleChange}>
            <option className="option-custom" placeholder="choose option">Please Choose</option>
      <option value={"Beginner"}>
           Beginner
      </option>
      <option value={"Intermediate"}>
           Intermediate
      </option>
      <option value={"Advanced"}>
           Advanced
      </option>
      <option value={"All Levels"}>
           All Levels
      </option>
     </select>
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
          <label htmlFor="categoryId" className="pr-3">
           Hobby Category </label>
            <select name="categoryId"
              id="categoryId"
              className="rounded mb-3"
              value={input.categoryId}
              onChange={handleChange}>
              <option placeholder="choose Hobby Category">Select Hobby Category</option>
              {categories.map((category) => (
              <option key={category.id} value={categoryId}>
              {category.categoryId}
               </option>
               ))}
            </select>
          </div>
          <div>
          <label htmlFor="eventPrice" className="pr-3">
            Price Range £0-{input.event_price}</label>
            <input type="range" 
            name="eventPrice" 
            className="range-custom mb-3" 
            min="0" 
            max="50" 
            step="1" 
            value={input.eventPrice} 
            onChange={handleChange} 
            id="eventPrice">
            </input>
            </div>
<div>
            <label htmlFor="equipNeeded" className="pr-3"></label>
            Own equipment needed 
            <select name="equipNeeded"
            id="equipNeeded"
            className="rounded mb-3 pr-3"
            value={input.equipNeeded}
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
          <label htmlFor="eventDate"></label>
          <span className="pr-3">Event Date </span>
          <input
            name="eventDate"
            placeholder="Event Date"
            id="eventDate"
            type="date"
            className="rounded mb-3"
            value={input.eventDate}
            onChange={handleChange}
          />
          </div>
<div>
<label htmlFor="eventTime" className="pr-3">Event Time </label>
          <input
            name="eventTime"
            placeholder="Event Time"
            id="eventTime"
            type="time"
            className="rounded mb-3"
            value={input.eventTime}
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
            <h2>{event.eventName}</h2>
            <p>{event.eventDescription}</p>
            <p>{event.eventLocation}</p>
            <p>£{event.eventPrice}</p>
          </div>
        ))}
      </div>
      </div>

  );
}