import React, { useEffect, useContext } from 'react';
import db from '../firebase/firebaseConfig';

//CONTEXT
import UserContext from "../state/userContext";
import Ballot from '../votty/ballot';
import Candidate from '../votty/candidate';
import Votter from '../votty/voter';


const Votar = () => {

  const {candidates, user, candidate, ballot, setCandidate} = useContext(UserContext);

  let sinSeleccion = false;

  const selectCandidate = (e) => {
    sinSeleccion = true;
    const { key, value } = e.target;
    for (let i = 0; i < candidates.length; i++) {
      if (value == candidates[i].name) {
        setCandidate(candidates[i]);
      };      
    }
  }

  const votar = () => {
    ballot.vote(candidate, user);
  }

  
  useEffect(() => {
    setCandidate(new Candidate( '', '', "https://green.excertia.com/wp-content/uploads/2020/04/perfil-empty.png", ''));
    console.log('se ejecuto useefect votar');
  }, [])




  
  return (
    <div className='row rounded' id='row-candidatos'>
        <div className='col-4 border p-3 rounded' id='col1-cand'>
          <div className='row'>          
            <div className="input-group mb-3 input-group-sm">
               <span className="input-group-text">Buscar</span>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className='col'>
            <div className='btn-group-vertical'>
            {candidates.map((cand, i )=>{
                  return <button type="button " onClick={selectCandidate} key={i} value={cand.name} className="btn text-dark">{cand.name}</button>
                })}
            </div>
          </div>
        </div>
        <div className='col align-items-center justify-content-center text-center border p-3 rounded' id='col2-cand'>
            <br />
            <img src={candidate.picture} id='picture-p' className="img-rounded" alt="Cinque Terre" />
            <br />
            <br />
            <br />
            <button type="button" onClick={votar} className="btn btn-outline-success" id='boton-elegir'>Elegir</button>
            <br />
        </div>
    </div>
    
  )
};

export default Votar;
