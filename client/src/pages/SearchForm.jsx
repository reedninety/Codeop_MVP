import React from "react";
import { useEffect, useState } from "react";

export default function SearchForm() {

    const [events, setEvents] = useState([]);
    const [input, setInput] = useState({ event_location: "", skill_level: "" });

    const locationRequest =   fetch("/api/events?event_location=" + input.event_location)
    .then((response) => response.json());
    // const dateRequest = fetch("/api/events?event_date=" + input.event_date)
    // .then((response) => response.json());
    // const timeRequest = fetch("/api/events?event_time=" + input.event_time)
    // .then((response) => response.json());
    // const enviroRequest = fetch("/api/events?event_enviro=" + input.event_enviro)
    // .then((response) => response.json());
    // const crowdRequest =fetch("/api/events?event_crowd=" + input.event_crowd)
    // .then((response) => response.json());
    const skillRequest = fetch("/api/events?skill_level=" + input.skill_level)
    .then((response) => response.json());
    // const equipRequest = fetch("/api/events?equip_needed=" + input.equip_needed)
    // .then((response) => response.json());

    useEffect(() => {
      getEvents();
    }, []);

    const handleChange = (event) => {
      setInput((state) => ({
        ...state,
        [event.target.name]: event.target.value,
      }));
    };

    // const getEvents = () => {
    //   // const { event_location } = input;
    //   // get events filtered by input
    //   fetch("/api/events?event_location=" + input.event_location)
    //   .then((response) => response.json())
    //   .then((events) => {
    //     setEvents(events)
    //     console.log(events);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    //   };

    //attempt with chaining 
      // const getEvents = () => {
      //   // const { event_location } = input;
      //   // get events filtered by input
      //   fetch("/api/events")
      //   .then(response => {
      //     return response.json();
      //   })
      //   .then(input.event_location => { 
      //     return fetch(`/api/events?event_location=${input.event_location}`);
      //   })
      //   .then(response => {return response.json();
      //   })
      
      //   .then((events) => {
      //     setEvents(events)
      //     console.log(events);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      // //   };

        //attempt with maria
        // const getEvents = () => {
        //   const { event_location } = input;
        //   get events filtered by input
        //   const testArr = []
        //   const try1 = document.getElementsByClassName("info");
        //   const tryName = try1.id;
        //   testArr.push(tryName);
        //   const test2 = testArr.map((event) => (
        //   fetch("/api/events?" + event + "=" + event.value)
        //   .then((response) => response.json())
        //   .then((events) => {
        //     setEvents(events)
        //     console.log(events);
        //     console.log(testArr)
        //     console.log(test2)
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   })
        //   ))
        //   console.log(try1)
        //   console.log(tryName)
        //   console.log(testArr)

        //   };

  //attempt with promise.all

    const getEvents = () => {
      Promise.all([locationRequest, skillRequest])
      .then((events) => {
          setEvents(events);

      })
      .catch(error => {
        console.error(error);
     });
        }
  
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
            className="info"
            value={input.event_location}
            onChange={handleChange}
          />
          <label for="skill_level">Skill Level</label>
          <input
            name="skill_level"
            id="skill_level"
            type="text"
            className="info"
            value={input.skill_level}
            onChange={handleChange}
          />
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
