import React from 'react';
import Button from 'react-bootstrap/Button'

class indice extends React.Component {
    constructor(props) {
      super(props);
  
      
    }
  
    
    
  
    render() {
      return (
       <div>
           <h1>TOP 7 LEAGUES</h1>
           <Button href='/lfp' block>La Liga</Button>
           <Button href='/premier' block>Premier League</Button>
           <Button href='/calcio' block>Serie A</Button>
           <Button href='/fusball' block>Bundesliga</Button>
           <Button href='/equipes' block>Ligue 1</Button>
           <Button href='/equipas' block>Primeira Liga</Button>
           <Button href='/eredivisie' block>Eredivisie</Button>


       </div>
      );
    }
  }
  
 export default indice;