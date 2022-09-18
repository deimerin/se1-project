import React, {useContext}  from 'react';
import Login from './Login';
import Perfil from './Perfil';


//CONTEXT
import UserContext from '../state/userContext';
import Votar from './Votar';




const Inicio = () => {
  const {loggedStatus, getCandidates} = useContext(UserContext);
  
  
  if (loggedStatus) {
    return (<Perfil/>);
  } else {
    console.log('inicio: ', loggedStatus);
    return (<Login />);
  }
  
};

export default Inicio;
