import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
//Routing stuff
import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./components/home.js'));
const Information = lazy(() => import('./components/information.js'));



function App() {
   return (
      <div className="App">
         <Navbar/>
         <Router>
            <Suspense fallback={<div>Loading...</div>}>
               <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/info" component={Information}/>
               </Switch>
            </Suspense>
         </Router>
      </div>
   );
}

export default App;
