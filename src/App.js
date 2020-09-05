import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './Components/Navbar/Navbar';
import AlertState from './Redux/Alert/AlertState';
import DatabaseState from './Redux/Database/DatabaseState';


function App() {
  return (

    <DatabaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>

        </BrowserRouter>
      </AlertState>
    </DatabaseState>

  );
}

export default App;
