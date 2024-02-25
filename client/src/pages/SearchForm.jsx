import React from 'react';
import { useEffect, useState } from 'react';

export default function SearchForm() {

    const [results, setResults] = useState([]);
    const [result, setResult] = useState([]);

    const handleChange = (event) => {
        setInput(event.target.value);
      };
  
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
            <input
          className="form-control"
          value={input}
          onChange={(e) => handleChange(e)}></input>

            <input type="range" min="1" max="100" value="50" class="slider"
          onChange={(e) => handleChange(e)}></input>

            <input className="form-control"
          value={input}
          onChange={(e) => handleChange(e)}></input>

            <input className="form-control"
          value={input}
          onChange={(e) => handleChange(e)}></input>
          
            <input className="form-control"
          value={input}
          onChange={(e) => handleChange(e)}></input>
            <input className="form-control"
          value={input}
          onChange={(e) => handleChange(e)}></input>
            <input className="form-control"
          value={input}
          onChange={(e) => handleChange(e)}></input>

        </form>
    </div>
  )
}
