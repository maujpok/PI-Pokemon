import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import './App.css';
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Create from "./components/Create/Create";
import Details from "./components/Details/Details";
import { useDispatch } from "react-redux";
import { fetchApi, getTypes } from "./actions/actions";


export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchApi())
      dispatch(getTypes())
  },[dispatch]);

  return (
    <div className='App'>
      <NavBar/>
      <Switch>
        <Route exact path='/'><Landing/></Route>
        <Route path='/home'><Home/></Route>
        <Route exact path='/create'> <Create/></Route>
        <Route 
        path='/:name'
        render={({match}) => <Details name={match.params.name}/>}/>
      </Switch>
    </div>
  )
};
