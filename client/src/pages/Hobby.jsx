import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export default function Hobby() {
    const { id } = useParams(); 
    const [categoryDetails, setCategoryDetails] = useState({});
    const [categoryEvents, setCategoryEvents] = useState([])

    useEffect(() => {
        getDetails();
        getEvents();
      }, []);


    const getDetails = async () => {
        try {
          const response = await fetch(`/api/hobbies/details/${id}`, {
            method: "GET",
          });
          const data = await response.json();
          setCategoryDetails(data);
        } catch (err) {
          console.log(err);
        }
    };
        const getEvents = async () => {
        try {
            const response = await fetch(`/api/hobbies/details/${id}/events`, {
                method: "GET"
            });
            const data = await response.json();
            setCategoryEvents(data);
        } catch (err) {
            console.log(err)
         }
      };
  return (
    <div>
            <h1 className="homepage-title">{categoryDetails.categoryName}</h1>
            <h3 className="sub-heading">{categoryDetails.categoryDescription}</h3>

            <div className="row mb-4">
        {categoryEvents.map((event) => (
          <div key={event.id} className="container rounded p-5 my-5 bg col-4 mb-4">
            <h2>{event.eventName}</h2>
            <p>{event.eventDescription}</p>
            <p>{event.eventLocation}</p>
            <p>£{event.eventPrice}</p>
          </div>
        ))}
      </div>
        
    </div>
  );
}
