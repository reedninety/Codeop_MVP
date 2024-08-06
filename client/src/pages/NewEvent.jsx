import React from 'react';
import { useEffect, useState } from "react";
import "../App.css";


export default function NewEvent() {

  const [hobbies, setHobbies] = useState([]);
  const [input, setInput] = useState({
event_name: "",
  event_location: "",
  event_description: "",
  skill_level: "",
  hobby_id: 0,
  equip_needed: "",
  event_price: 0,
});

//Gets all hobbies so they appear in their dropdown menu
useEffect(() => {getHobbies();}, []);

const getHobbies = () => {
  fetch("/api/hobbies")
  .then((response) => response.json())
  .then((hobbies) => { setHobbies(hobbies)
  })
  .catch((error) => {
    console.log(error);
});
};

//currently, every input needs to be filled in on the form for this function to work - or else it will not add anything and return a 500 error (because the useState of input has set values)
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
    e.preventDefault()
    addEvent()
  }

  return (
    <div>
        <h2 className="homepage-title">Create New Event</h2>
        <p className="pb-4">Can't find the exact activity you were after? Why not create it yourself!</p>
        <form onSubmit={handleSubmit}>
          <div>
        <label htmlFor="event_name" className="pr-3">Event Name</label>
        <input
            name="event_name"
            id="event_name"
            type="text"
            className="rounded mb-3"
            value={input.event_name}
            onChange={handleChange}
          />
          </div>
          <div>
           <label htmlFor="event_description"></label>
           <label className="pr-3">Event Description</label>
            <textarea
            name="event_description"
            id="event_description"
            type="text"
            className="rounded mb-3"
            value={input.event_description}
            onChange={handleChange}
          />
          </div>
          <div>
           <label htmlFor="event_location" className="pr-3">Event Location</label>
        <input
            name="event_location"
            id="event_location"
            type="text"
            className="rounded mb-3"
            value={input.event_location}
            onChange={handleChange}
          />
          </div>

          <div>
    <label htmlFor="skill_level" className="pr-3">Skill Level</label>
        <input
            name="skill_level"
            id="skill_level"
            type="text"
            className="rounded mb-3"
            value={input.skill_level}
            onChange={handleChange}
            />
            </div>

            <div>
            <label htmlFor="hobby_id" className="pr-3">
      Hobby Category</label>
       <select name="hobby_id"
            id="hobby_id"
            type="text"
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
   <label htmlFor="equip_needed" className="pr-3"> Do participents need their own equipment?</label>
       <select name="equip_needed"
            id="equip_needed"
            className="rounded mb-3"
            value={input.equip_needed}
            onChange={handleChange}>
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
            name="event_price"
            id="event_price"
            type="text"
            className="rounded mb-3 pl-2"
            value={input.event_price}
            onChange={handleChange}
            />
            </div>

            <div>
          <button className="button">Create New Event</button>
          </div>
        </form>



    </div>
  )
}
