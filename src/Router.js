import React from 'react';
import { Route, BrowserRouter, Switch, Redirect} from "react-router-dom";
import DogList from "./DogList"; 
import FindDogDetails from "./FindDogDetails"; 
import Nav from "./Nav"; 

function Router (props) {
    return (
    // <BrowserRouter>
      <Switch>
        {/* <Nav dogs={props.dogs} /> */}
        <Route exact path="/dogs" >
          <DogList dogs={props.dogs} /> 
        </Route>
        <Route path="/dogs/:name" >
          <FindDogDetails dogs={props.dogs} /> 
        </Route>
        <Redirect to="/dogs" />
      </Switch>
    // </BrowserRouter>
    )
}

export default Router; 
