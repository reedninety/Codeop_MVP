import React from "react";
import { useEffect, useState } from "react";

export default function SearchForm() {
  const [events, setEvents] = useState([]);
  const [input, setInput] = useState({ event_location: "" });

<<<<<<< HEAD
    const [events, setEvents] = useState([]);
    const [input, setInput] = useState({ event_location: "", skill_level: "" });
||||||| eb7ee69
    const [results, setResults] = useState([]);
    const [result, setResult] = useState([]);
    const [events, setEvents] = useState([]);
    const [input, setInput] = useState([]);
=======
  useEffect(() => {
    getEvents();
  }, []);
>>>>>>> 289a1c89caf444370348135898e1e7f997ed2eaf

<<<<<<< HEAD
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
||||||| eb7ee69
    useEffect(() => {getEvents();}, []);
=======
  const handleChange = (event) => {
    setInput((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };
>>>>>>> 289a1c89caf444370348135898e1e7f997ed2eaf

<<<<<<< HEAD
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

||||||| eb7ee69
    const handleChange = (event) => {
        setInput(event.target.value);
        console.log(input);
      };

    const getEvents = () => {
      fetch("/api/events")
      .then((response) => response.json())
      .then((events) => { setEvents(events)
=======
  const getEvents = () => {
    const { event_location } = input;
    // get events filtered by input
    fetch("/api/events?event_location=" + event_location)
      .then((response) => response.json())
      .then((events) => {
        setEvents(events);
>>>>>>> 289a1c89caf444370348135898e1e7f997ed2eaf
      })
<<<<<<< HEAD
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
||||||| eb7ee69
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
=======
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
>>>>>>> 289a1c89caf444370348135898e1e7f997ed2eaf
    </div>
  );
}
