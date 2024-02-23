import React from 'react'
import { useEffect, useState } from 'react'

export default function AllHobbies() {

    const [hobbies, setHobbies] = useState([]);
    const [hobbyEvents, setHobbyEvents] = useState ([]);

    useEffect(() => {getHobbies();}, []);

    const getHobbies = () => {
        fetch("/api/hobbies")
        .then((response) => response.json())
        .then((hobbies) => { setHobbies(hobbies)
        })
        .catch((error) => {
          console.log(error);
      });
      }

      const hobbyCategories = () => {
        fetch("api/hobbies/:id")
        .then((response) => response.json())
        .then((hobbyEvents) => { setHobbyEvents(setHobbyEvents)
            console.log(hobbyEvents)
        })
        .catch((error) => {
          console.log(error);
      });
      }
  return (
    <div>
    <h1>Hobby Categories</h1>
    <ul>
    {hobbies.map((hobby) => (
      <h3 key={hobby.id}>
        {hobby.hobby_category} 
      </h3>
    ))}
  </ul>
  </div>
  )
}
