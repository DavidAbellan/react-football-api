import React from 'react';
import axios from 'axios';
import Equipo from './equipo';
import LFPApi from '../config/LFPapi'


class Equipos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            equipos: null
        }
        this.url = 'http://api.football-data.org/v2/competitions/PD/teams';
        this.key = '0c5f1408ad9d4716b67b707c99c3d77f';
        this.getEquipos();


    }
    async getEquipos() {
        // en la api pone que lo del x auth token es con mayuscula
        let equip = await axios.get(this.url, {
            headers: {
                'X-Auth-Token': this.key
            }
        });
        this.setState ({
            equipos: equip.data.teams
        })
       
    }
    render() {
        if (this.state.equipos == null) {
            return (
                <h1> Cargando equipos...</h1>
                
                )
            } else {
                
                
            return (
                <div className="col 4" >
                    {this.state.equipos.map((e,i) => <Equipo key={i} {...e} ></Equipo>)}
                </div>    




            )
        }


    }



}

export default Equipos;