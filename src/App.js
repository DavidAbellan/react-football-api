import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Equipos from './components/equipos'
import Plantilla from './components/plantilla';
import Teams from './components/teams';
import Index from './components/index';
import Squadra from './components/squadre';
import fusbal from './components/Mannschaften';
import equipes from './components/equipes';
import equipas from './components/equipas';
import Eredivisie from './components/hardware';
import Omades from './components/omades';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
       <Switch>
         <Route path="/" component={Index} exact/>
         <Route path="/plantilla/:id" component={Plantilla} exact />
         <Route path="/lfp" component={Equipos} exact/>
         <Route path="/premier" component={Teams} exact/>
         <Route path="/calcio" component={Squadra} exact/>
         <Route path="/fusball" component={fusbal} exact/>
         <Route path="/equipes" component={equipes} exact/>
         <Route path="/equipas" component={equipas} exact/>
         <Route path="/equipas" component={equipas} exact/>
         <Route path="/eredivisie" component={Eredivisie} exact/>
         <Route path="/omades" component={Omades} exact/>




       </Switch>
    
    
    </BrowserRouter>
    </div>
  )
}

export default App;
