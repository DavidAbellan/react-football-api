import React from 'react';
import axios from 'axios';

class Plantilla extends React.Component{
    constructor(props){
       
        super(props)
        this.state = {
            players :[]
        }
         this.url = 'http://api.football-data.org/v2/teams/' + props.match.params.id;
        this.key = '0c5f1408ad9d4716b67b707c99c3d77f';
        this.getPlantilla(); 
    }

    async getPlantilla(){
        let plant = await axios.get(this.url , {
            headers: {
                'X-Auth-Token': this.key
            }
        })
        this.setState(
            {players : plant.data.squad}
        )
       

    }
    render(){
        if (this.players === []){ 
           return(
                  <h1>Cargando...</h1>
                  )
        } 
        else {
            return(
                <div>
                    <ul>
                     {this.state.players.map((p)=><div><li><h3>{p.name}</h3><p>{p.position}</p></li></div>)}
                   </ul>
                </div>
            )

        }
    }
}
export default Plantilla;