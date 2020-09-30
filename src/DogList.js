import React from 'react';
import { NavLink } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import DogDetails from "./DogDetails"

function DogList(props){
    return (
      <div>
          {/* {props.dogs.map( dog => ( 
          
          < div>
            <img src = {dog.src}  alt = {dog.name} />
             <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
          </div>
        ))}  */}
      </div>
    )
  }

export default DogList; 


  