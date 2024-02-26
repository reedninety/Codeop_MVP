import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AllHobbies from "./pages/AllHobbies";
import EventList from "./pages/EventList";
import SearchForm from "./pages/SearchForm";
import NewEvent from "./pages/NewEvent";

export default function App() {
  return (
    <div className = "App">
      <nav>
          <Link to="/"> Home </Link>
          {/* <Link to="/all-hobbies"> Hobby List </Link> */}
          {/* <Link to="/event-list"> All Events </Link> */}
          <Link to="/event-search"> All Hobbies </Link>
          <Link to="/new-event"> Create new Event </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-hobbies" element={<AllHobbies />} />
        <Route path="/event-list" element={<EventList />} />
        <Route path="/event-search" element={<SearchForm />} />
        <Route path="/new-event" element={<NewEvent />} />
      </Routes>
  
    </div>
  );
}
