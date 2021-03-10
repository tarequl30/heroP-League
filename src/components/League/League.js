import React from 'react';
import { Link } from 'react-router-dom';
import './League.css'

const League = (props) => {
    const {strLeague, strBadge, idLeague} = props.league;
    return (
         <>
         
           <div className="leagueInfo">
            <img src={strBadge} alt="" width="70%"/>
            <h3><strong>{strLeague}</strong></h3>
            <h4>Sports Type : Football </h4>
            <button><Link to={`/about/${idLeague}`}>Explore</Link></button>
           </div>
       </>
        
    );
};

export default League;