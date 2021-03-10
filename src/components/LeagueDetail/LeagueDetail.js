import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookF  } from '@fortawesome/free-solid-svg-icons'
import {  faFacebookF , faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import maleTeam from '../../Photo/male.png'
import femaleTeam from '../../Photo/female.png'

const LeagueDetail = () => {
    const {idLeague} = useParams()
    const [detail, setDetail] = useState({})
    

    useEffect(()=> {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(res => res.json())
        .then(data => setDetail(data.leagues[0]))
    },[idLeague])
    return (
        <>
       
        <div className="bg"><h1> <img src={detail.strLogo} alt="" width="30%"/> </h1></div>
        
        <div className="detailInfo">
            <div>
                <h2>{detail.strLeagueAlternate}</h2>
                <p>Founded : {detail.intFormedYear}</p>
                <p>Country: {detail.strCountry}</p>
                <p>Sports Type :{detail.strSport}</p>
                <p>Gender : {detail.strGender}</p>
            </div> 
            <div className="img">
                <img src={maleTeam} alt="" width="30%"/>
            </div>
        </div>
        <div className="dummyInfo">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam repellendus exercitationem tempora deleniti, quas labore adipisci deserunt! Id ex amet, adipisci quia quibusdam accusantium earum! Blanditiis natus adipisci numquam.
              Corrupti veniam ex praesentium adipisci quid, excepturi accusantium saepe, dolores accusamus numquam quam? Ad, voluptatum?</p>
           <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam repellendus exercitationem tempora deleniti, quas labore adipisci deserunt! Id ex amet, adipisci quia quibusdam accusantium earum! Blanditiis natus adipisci numquam.
             Corrupti veniam ex praesentium adipisci quidem vel et in architecto pariatur. Aspernatur quis provident ratione quia culpa, </p>
           <div className='icon'>
                 <button><FontAwesomeIcon icon={faFacebookF } /></button> <button><FontAwesomeIcon icon={faInstagram } /></button>  <button><FontAwesomeIcon icon={faTwitter} /></button>
           </div>
        </div>
        </>
    );
};


export default LeagueDetail;