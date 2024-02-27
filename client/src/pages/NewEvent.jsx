import React from 'react';
import { useEffect, useState } from "react";


export default function NewEvent() {

  const [hobbies, setHobbies] = useState([]);
  const [input, setInput] = useState({
event_name: "",
  event_location: "",
  event_description: "",
  skill_level: "",
  hobby_id: 0,
  equip_needed: true,
});

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
    console.log(value, name)
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
        <label htmlFor="event_name">Event Name</label>
        <input
            name="event_name"
            id="event_name"
            type="text"
            value={input.event_name}
            onChange={handleChange}
          />
           <label htmlFor="event_description">Event Description</label>
          <textarea
            name="event_description"
            id="event_description"
            type="text"
            value={input.event_description}
            onChange={handleChange}
          />
           <label htmlFor="event_location">Event Location</label>
        <input
            name="event_location"
            id="event_location"
            type="text"
            value={input.event_location}
            onChange={handleChange}
          />

<label htmlFor="skill_level">Skill Level</label>
        <input
            name="skill_level"
            id="skill_level"
            type="text"
            value={input.skill_level}
            onChange={handleChange}
            />

            <label htmlFor="hobby_id">
      Hobby Category</label>
       <select name="hobby_id"
            id="hobby_id"
            type="text"
            value={input.hobby_id}
            onChange={handleChange}>
           {hobbies.map((hobby) => (
      <option key={hobby.id} value={hobby.id}>
           {hobby.hobby_category}
      </option>
    ))}
       </select>

   <label htmlFor="equip_needed"></label>
      Do participents need their own equipment?
       <select name="equip_needed"
            id="equip_needed"
            value={input.equip_needed}
            onChange={handleChange}>
      <option value={true}>
           Yes
      </option>
      <option value={false}>
           No
      </option>
       </select>
  
          <button>Create New Event</button>
        </form>



    </div>
  )
}
