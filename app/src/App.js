import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import useToken from './useToken.js'


//Routing stuff
import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/login';

//importing components
const Home = lazy(() => import('./components/home.js'));
const Information = lazy(() => import('./components/information.js'));

function App() {
   const {token, setToken} = useToken();

   if (!token) {
      return <Login setToken={setToken} />
   }

   return (
      <div className="App">
         <Navbar />
         <Router>
            <Suspense fallback={<div>Loading...</div>}>
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/info" component={Information} />
               </Switch>
            </Suspense>
         </Router>
      </div>
   );
}

export default App;
