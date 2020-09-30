import React from 'react';
import { Link, Redirect } from "react-router-dom";
import { useParams } from 'react-router-dom';
import DogDetails from './DogDetails';


function FindDogDetails(props){
  console.log('props...000000.', props)
  const {name} = useParams();

  console.log('name....', name)
  if (name) {
    const currentDog = props.dogs.find(dog => dog.name === name)
    console.log('currentDog...', currentDog)
    return < DogDetails dog={currentDog} />;
  }
  return null;
}

export default FindDogDetails; 