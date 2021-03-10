import React from 'react';
import { Link } from 'react-router-dom';
import './League.css'

const League = (props) => {
    const {strLeague, strBadge, idLeague , strSport} = props.league;
    return (
         <div className="background">
           <div className="leagueInfo">
            <img src={strBadge} alt="" width="70%"/>
            <h3><strong>{strLeague}</strong></h3>
            <h4>Sports Type : {strSport} </h4>
            <button><Link style={{textDecoration:'none', color: 'white'}} to={`/about/${idLeague}`}>Explore</Link></button>
           </div>
       </div>
        
    );
};

export default League;