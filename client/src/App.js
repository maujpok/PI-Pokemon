import React from "react";
import { Route, Switch } from "react-router";
import Landing from './components/Landing';
import AddPokemon from "./components/AddPokemon";
import GetApi from "./components/GetApi";
import NavBar from './components/NavBar';
// import Home from "./components/Home";
import './App.css';


// function App() {
//   return (
//     <React.Fragment>
//       <Route exact path="/" component={Landing} />
//       {/* <Route path="/add" component={AddPokemon} />
//       <Route path='/' component={NavBar}/>
//       <Route path="/pokemons" component={MainPage} />
//       <Route path="/pokemons/:id" component={DetailPage} />
//       <Route path="/types" component={Types} /> */}
//     </React.Fragment>
//   );
// }

export default function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component= {Landing} />
        <Route path='/' component={NavBar} />
        <Route path='/pokemons' component= {GetApi} />
        <Route path='/add' component={AddPokemon} />
      </Switch>
    </div>
  )
};
