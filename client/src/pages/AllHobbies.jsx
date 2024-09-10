import React from 'react'
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import axios from "axios";
import "../App.css";

export default function AllHobbies() {

    const [hobbies, setHobbies] = useState([]);
    const navigate = useNavigate()

    const getHobbies = async () => {
      try{
        const response = await axios.get("/api/hobbies/types");
        // console.log(response);
        setHobbies(response.data);
      } catch (error) {
          console.log(error);
      };
      };
      
  useEffect(() => {getHobbies();}, []);
   
  const takeToCategory = (id) => {
    console.log("I've been clicked!")
    navigate(`/hobbies/${id}`)
      };


  return (
    <div>
    <h1 className="homepage-title">Hobby Categories</h1>
    <ul>
      <dl className="grid grid-cols-3 gap-4">
    {hobbies.map((hobby) => (
      <div className="cat-box"onClick={() => takeToCategory(hobby.id)}>
      <div className="cat-text text-center" key={hobby.id}>
           {hobby.categoryName}
      </div>
      </div>
    ))}
    </dl>
  </ul>
  </div>
 
  )
}
