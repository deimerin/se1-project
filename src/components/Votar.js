import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//CONTEXT
import UserContext from "../state/userContext";
import Candidate from '../votty/candidate';
import MostrarCandidato from './MostrarCandidato';



const Votar = () => {

  const { candidates, user, candidate, ballot, setCandidate, setInitialState, estado, setEstado } = useContext(UserContext);

  let sinSeleccion = false;
  const navigate = useNavigate();

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

    if (candidate.name == '' & candidate.party == '') {
      toast.info(' Debe escoger un candidato', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      if (estado & !user.hasVoted) {

        setEstado(false);
        let est = ballot.vote(candidate, user);
        if (est) {
          toast.info('Proceso de votacion realizado', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } else {
        toast.info('Ya realizo el proceso de votacion', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }


  };

  const goToLogin = () => {
    setInitialState();
    navigate('/');
  };


  useEffect(() => {
    setCandidate(new Candidate('', '', "https://green.excertia.com/wp-content/uploads/2020/04/perfil-empty.png", ''));
  }, [])


  const listar = () => {
    if (true) {

    }
  }

  return (
    <div className='row rounded' id='row-candidatos'>
      <div className='col-4 p-3 rounded' >
        <div className='row'>
          <div className="input-group mb-3 input-group-sm">
            <span className="input-group-text">Buscar</span>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className='row'>
          <div className='col' id='col1-cand'>
            <div className='btn-group-vertical'>
              {candidates.map((cand, i) => {
                return <button type="button " onClick={selectCandidate} key={i} value={cand.name} className="btn text-dark">{cand.name}</button>
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='col align-items-center justify-content-center text-center p-3 rounded' id='col2-cand'>

        <div className='row col align-items-center justify-content-center text-center p-3 ' id='row-btt-vot1'>
          <MostrarCandidato />
        </div>

        <div className='row col align-items-center justify-content-center text-center ' id='row-btt-vot2'>
          <div className="col-4">
            <button
              onClick={goToLogin}
              className="btn btn-lg btn-outline-primary"
              type="submit"
              id='btt-perf'>
              Salir
            </button>
          </div>
          <div className="col-4" >
            <button
              onClick={votar}
              className="btn btn-lg btn-primary"
              type="submit"
              id='btt-perf'>
              Votar
            </button>
          </div>
        </div>

      </div>

    </div>

  )
};

export default Votar;
