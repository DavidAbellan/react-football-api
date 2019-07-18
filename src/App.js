import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Equipos from './components/equipos'
import Plantilla from './components/plantilla';
import Index from './components/index';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
       <Switch>
         <Route path="/" component={Index} exact/>
         <Route path="/plantilla/:id" component={Plantilla} exact />
         <Route path="/lfp" component={Equipos} exact/>
         <Route path="/premier" component={Equipos} exact/>
         <Route path="/calcio" component={Equipos} exact/>
         <Route path="/fusball" component={Equipos} exact/>
         <Route path="/equipes" component={Equipos} exact/>
         <Route path="/equipas" component={Equipos} exact/>
         <Route path="/eredivisie" component={Equipos} exact/>




       </Switch>
    
    
    </BrowserRouter>
    </div>
  )
}

export default App;
