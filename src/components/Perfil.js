import React, { useEffect, useContext }  from 'react';
import { useNavigate } from 'react-router-dom';

import Votter from '../votty/voter';
//CONTEX
import UserContext from '../state/userContext';
import db from '../firebase/firebaseConfig';


const Perfil = () => {
  //console.log('En perfil, router funcion.')
  const {user, getCandidates, setInitialState} = useContext(UserContext);
  const navigate  = useNavigate();
  var name = user.name;
  var cedula = user.id;
  //console.log('cedula votante desde perfil: ', name)
  var estadoVotante = 'Denegado';
  //console.log(name);
  //console.log(cedula);

  const goToVotter = () => {
    console.log('hasvoted: ', user.hasVoted)

    if (!user.hasVoted) {
      estadoVotante = 'Valido';
      //console.log('desde perfil: ', user);
      navigate('/perfil/votacion');
    };
  };

  const goToLogin = () => {
    setInitialState();
    navigate('/');
  };

  useEffect(() => {
    getCandidates();
  }, [])
  
  

  return (
    <div className="container text-center rounded" id="contenedor-perfil">
      <div className="card p-3"  >
        <img id="img-user" className="card-img-top" src="https://green.excertia.com/wp-content/uploads/2020/04/perfil-empty.png" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">Nombre: {name}</h5>
          <h5 className="card-title">Cedula: {cedula}</h5>
          <p className="card-text">
            Bienvenido al proceso de votacion. <br />
            su estado como votante es: {estadoVotante}
          </p>
          <div className="row pt-3 justify-content-center">
            <div className="col-4">
              <button 
                onClick={goToLogin}
                className="btn btn-lg btn-outline-primary" 
                type="submit"
                id='btt-perf'>
                Salir
              </button>
            </div>
            <div className="col-4">
              <button 
                onClick={goToVotter}
                className="btn btn-lg btn-primary" 
                type="submit"
                id='btt-perf'>
                Votar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;

