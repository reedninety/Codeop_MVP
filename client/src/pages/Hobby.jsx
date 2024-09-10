import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export default function Hobby() {
    const { id } = useParams(); 
    const [categoryDetails, setCategoryDetails] = useState({});

    useEffect(() => {
        getDetails();
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
  return (
    <div>
            <h1 className="homepage-title">{categoryDetails.categoryName}</h1>
            <h3 className="sub-heading">{categoryDetails.categoryDescription}</h3>
        
    </div>
  );
}
