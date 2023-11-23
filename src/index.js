import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './navigation/Header'
import MainPage from './pages/mainPage'
import PlayerPage from './pages/playerPage'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rankings from './Coleweight/Rankings'
import { BrowserRouter, Switch , Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
   
    <BrowserRouter >
 <Header />
      <Switch>
        <Route exact path="/" >
        <MainPage />
        </Route>
      
        <Route strict path="/player" >
        <PlayerPage />
      </Route>  
        <Route strict path="/ranking">
          <Rankings />
        </Route>
      </Switch >

    </BrowserRouter>
  </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
