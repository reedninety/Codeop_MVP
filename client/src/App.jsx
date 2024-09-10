import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AllHobbies from "./pages/AllHobbies";
import EventList from "./pages/EventList";
import SearchForm from "./pages/SearchForm";
import NewEvent from "./pages/NewEvent";
import Profile from "./pages/Profile";
import NavBar from "../src/components/NavBar";
import Hobby from "./pages/Hobby";


export default function App() {
  return (
    <div className = "App">

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hobbies" element={<AllHobbies />} />    
        <Route path="/hobbies/:id" element={<Hobby />}/>
        <Route path="/event-list" element={<EventList />} />
        <Route path="/event-search" element={<SearchForm />} />
        <Route path="/new-event" element={<NewEvent />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
  
    </div>
  );
}

