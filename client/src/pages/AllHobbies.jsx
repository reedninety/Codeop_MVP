import React from 'react'
import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import axios from "axios";
import "../App.css";

export default function AllHobbies() {

    const [hobbies, setHobbies] = useState([]);

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
      const takeToCategory = () => {
        console.log("I've been clicked!")
      };


  return (
    <div>
    <h1 className="homepage-title">Hobby Categories</h1>
    <ul>
      <dl className="grid grid-cols-3 gap-4">
    {hobbies.map((hobby) => (
      <div className="cat-box">
      <div className="cat-text text-center" key={hobby.id} onClick={takeToCategory}>
           {hobby.categoryName}
      </div>
      </div>
    ))}
    </dl>
  </ul>
  </div>
 
  )
}
