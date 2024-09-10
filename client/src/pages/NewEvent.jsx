import React from 'react';
import { useEffect, useState } from "react";
import "../App.css";


export default function NewEvent() {

  const [hobbies, setHobbies] = useState([]);
  const [input, setInput] = useState({
eventName: "",
  eventLocation: "",
  eventDescription: "",
  skillLevel: "",
  CategoryId: 0,
  equipNeeded: "",
  eventPrice: 0,
});

//Create today's date for the date input field min-value
function yyyymmdd(dateIn) {
  let yyyy = dateIn.getFullYear();

  let mm = dateIn.getMonth() + 1; // getMonth() is zero-based
  if (mm < 10) {
    mm = "0" + mm;
  }
  let dd = dateIn.getDate();
  return String(`${yyyy}-${mm}-${dd}`); // Leading zeros for mm and dd
}
var today = new Date();
let date = yyyymmdd(today);
//Gets all hobbies so they appear in their dropdown menu
useEffect(() => {getHobbies();}, []);

const getHobbies = () => {
  fetch("/api/hobbies/types")
  .then((response) => response.json())
  .then((hobbies) => { setHobbies(hobbies)
  })
  .catch((error) => {
    console.log(error);
});
};

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
    e.preventDefault();
      addEvent()
  }

  return (
    <div>
        <h2 className="homepage-title">Create New Event</h2>
        <p className="pb-4">Can't find the exact activity you were after? Why not create it yourself!</p>
        <form onSubmit={handleSubmit}>
          <div>
        <label htmlFor="eventName" className="pr-3">Event Name</label>
        <input
            name="eventName"
            id="eventName"
            type="text"
            className="rounded mb-3"
            value={input.event_name}
            onChange={handleChange}
            required
          />
          </div>
          <div>
           <label htmlFor="eventDescription"></label>
           <label className="pr-3">Event Description</label>
            <textarea
            name="eventDescription"
            id="eventDescription"
            type="text"
            className="rounded mb-3"
            value={input.eventDescription}
            onChange={handleChange}
            required
          />
          </div>
          <div>
           <label htmlFor="eventLocation" className="pr-3">Event Location</label>
        <input
            name="eventLocation"
            id="eventLocation"
            type="text"
            className="rounded mb-3"
            value={input.eventLocation}
            onChange={handleChange}
            required
          />
          </div>

          <div>
    <label htmlFor="skillLevel" className="pr-3">Skill Level</label>
        <select
            name="skillLevel"
            id="skillLevel"
            type="text"
            className="rounded mb-3"
            value={input.skillLevel}
            onChange={handleChange}
            required>
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
            <label htmlFor="categoryId" className="pr-3">
      Hobby Category</label>
       <select name="categoryId"
            id="categoryId"
            type="text"
            className="rounded mb-3"
            value={input.categoryId}
            onChange={handleChange}
            required>
              <option placeholder="choose Hobby Category">Select Hobby Category</option>
           {hobbies.map((hobby) => (
      <option key={hobby.id} value={hobby.id}>
           {hobby.categoryName}
      </option>
    ))}
       </select>
       </div>

       <div>
   <label htmlFor="equipNeeded" className="pr-3"> Do participents need their own equipment?</label>
       <select name="equipNeeded"
            id="equipNeeded"
            className="rounded mb-3"
            value={input.equipNeeded}
            onChange={handleChange}
            required>
              <option className="option-custom" placeholder="choose option">Please Choose</option>
      <option value={"1"}>
           Yes
      </option>
      <option value={"0"}>
           No
      </option>
       </select>
       </div>

       <div>
       <label htmlFor="event_price" className="pr-3">How much is this Event?</label> <span className="pr-1">£</span>
        <input
            name="eventPrice"
            id="eventPrice"
            type="number"
            className="rounded mb-3 pl-2"
            value={input.eventPrice}
            onChange={handleChange}
            required
            />
            </div>
        <div>
       <label htmlFor="eventDate" className="pr-3">When is this Event?</label>
        <input
            name="eventDate"
            id="eventDate"
            type="date"
            className="rounded mb-3 pl-2"
            value={input.eventDate}
            onChange={handleChange}
            required
            />
            </div>
            <div>
       <label htmlFor="eventDate" className="pr-3">What time does the Event start?</label>
        <input
            name="eventTate"
            id="eventTate"
            type="time"
            className="rounded mb-3 pl-2"
            value={input.eventTime}
            onChange={handleChange}
            required
            />
            </div>
            <div>
          <button className="button" type="submit">Create New Event</button>
          </div>
        </form>



    </div>
  )
}
