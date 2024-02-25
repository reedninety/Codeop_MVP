import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AllHobbies from "./pages/AllHobbies";
import EventList from "./pages/EventList";
import SearchForm from "./pages/SearchForm";


export default function App() {

  return (
    <div className = "App">

      <nav>
          <Link to="/"> Home </Link>
          <Link to="/all-hobbies"> Hobby List </Link>
          <Link to="/event-list"> All Events </Link>
          <Link to="/event-search"> Event Search </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-hobbies" element={<AllHobbies />} />
        <Route path="/event-list" element={<EventList />} />
        <Route path="/event-search" element={<SearchForm />} />
      </Routes>
  
    </div>
  )
};
