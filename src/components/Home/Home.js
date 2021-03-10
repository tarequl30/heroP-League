import React, { useEffect, useState } from 'react';
import League from '../League/League';
import '../Home.css'

const Home = () => {
    const [leagues, setLeague] = useState([])
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England&s=Soccer')
        .then(res => res.json())
        .then(data => setLeague(data.countrys))
    },[])
    return (
        <div className="cover">
            <div className="bg"><h1>Hero Premiere League</h1></div>
            {
                leagues.map(league => <League league={league}></League> )
            }
        </div>
    );
};

export default Home;