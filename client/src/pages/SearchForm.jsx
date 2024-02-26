import React from 'react';
import { useEffect, useState } from 'react';

export default function SearchForm() {

    const [results, setResults] = useState([]);
    const [result, setResult] = useState([]);
    const [events, setEvents] = useState([]);
    const [input, setInput] = useState([]);

    useEffect(() => {getEvents();}, []);

    const handleChange = (event) => {
        setInput(event.target.value);
        console.log(input);
      };

    const getEvents = () => {
      fetch("/api/events")
      .then((response) => response.json())
      .then((events) => { setEvents(events)
      })
      .catch((error) => {
        console.log(error);
      });
      }
  
    const handleSubmit = () => {
        fetch("/api/events/results")
        .then((response) => response.json())
        .then((results) => { setResults(results)
        })
        .catch((error) => {
          console.log(error);
      });
      }
  
    return (
    <div>
        <h1> Search Form </h1>
        <form>
        {/* {events.map((event) => (<input key={event.id} type="checkbox" name={event.event_location} value={input} onChange={(e) => handleChange(e)}> Event Location </input>
          ))} */}

            <label for="event_location">Event Location</label>
            <input name="event_location" id="event_location" type="checkbox" value={input} onChange={(e) => handleChange(e)}/>

            Event Price<input name="event_price" type="range" min="1" max="100" value={input} onChange={(e) => handleChange(e)}/>

            {/* Event Date <input name="event_date" type="date" value={input} onChange={(e) => handleChange(e)}/>

            Event Time <input name="event_time" type="time" onChange={(e) => handleChange(e)}/>

            Indoors or outdoors <input name="event_enviro" type="checkbox" onChange={(e) => handleChange(e)}/>
                        
           Solo or group <input name="event_crowd" type="checkbox" onChange={(e) => handleChange(e)}/>

            Skill level <input name="skill_level" type="checkbox" onChange={(e) => handleChange(e)}/>

           Own equipment needed <input name="equip_needed" type="checkbox" onChange={(e) => handleChange(e)}/> */}

          <button onClick={handleSubmit} >Submit</button>
         </form>
    </div>
  )
}
