import React from 'react';
import { NavLink } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import { useParams } from 'react-router-dom';
import FindDogDetails from "./FindDogDetails"


 

  function DogDetails ({dog}) { 
    return (
      <div >
            <div>
            <img src = {dog.src}  alt = {dog.name} />
            <h3>name: {dog.name} </h3>
            <h3>age: {dog.age} years old </h3> 
            <h3 >facts: {dog.facts} </h3> 
            {FindDogDetails}
            </div>
           
          <Link to="/dogs">Go Back</Link>
        </div>
    )
  } 


export default DogDetails; 
