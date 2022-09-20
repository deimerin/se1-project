import React, { useEffect, useContext }  from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//CONTEX
import UserContext from '../state/userContext';



const Perfil = () => {

  const {user, getCandidates, setInitialState} = useContext(UserContext);
  const navigate  = useNavigate();
  var name = user.name;
  var cedula = user.id;
  let estadoVotante = '';  
  if (!user.hasVoted) {
    estadoVotante = 'Valido';  
  } else {
    estadoVotante = 'Invalido';
  }

  const goToVotter = () => {
    if (!user.hasVoted) {
      navigate('/perfil/votacion');
    } else {
      toast.info('Ya realizo el proceso de votacion...', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  };

  const goToLogin = () => {
    setInitialState();
    navigate('/');
  };

  useEffect(() => {
    getCandidates();
  }, [user.hasVoted])
  
  

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

