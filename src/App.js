import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Equipos from './components/equipos'
import Plantilla from './components/plantilla';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
       <Switch>
         <Route path="/" component={Equipos} exact/>
         <Route path="/plantilla/:id" component={Plantilla} exact />

       </Switch>
    
    
    </BrowserRouter>
    </div>
  )
}

export default App;
