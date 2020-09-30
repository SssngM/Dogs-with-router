import React from 'react'; 
import { NavLink } from "react-router-dom"; 
// import DogList from "./DogList"
import DogDetails from "./DogDetails"; 
// import DogList from "./DogList"; 

function Nav(props){
    console.log('props...000000.', props)
    // {props.dogs.map(dog => (
    //     < NavLink alt={dog.name}>
    //      {dog.name} 
    //      </NavLink>
    // ))}
    return (
        <nav >
            <NavLink exact to= "/dogs">Home</NavLink>
        
            {props.dogs.map( dog => (    
              <div>
                <NavLink to={`/dogs/${dog.name}`} > {dog.name} </NavLink> 
              </div>
            ))}
        </nav>
    )
}

export default Nav; 


