import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';

export default function NavBar() {

  return (
    <div>
      <nav className="navbar items-center justify-between w-full p-6">
   <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
          <Link to="/hobbies"> Hobby Categories</Link>
          {/* <Link to="/event-list"> All Events </Link> */}
          <Link to="/event-search"> Search Events </Link>
          <Link to="/new-event"> Create New Event </Link>
          <Link to="profile"> Login </Link>
        </nav>
    </div>
  );
}
