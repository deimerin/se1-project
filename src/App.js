import React from 'react';
import './App.css'

//componentes
import Login from './components/Login';
import Perfil from './components/Perfil';
import Votar from './components/Votar';
import {

  Routes,
  Route
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//CONTEXT
import UserState from './state/userState';


function App () {
  return (
    <>
      <UserState>      
        <Routes>
          <Route index path='/' element={<Login/>}/> 
          <Route exact path='/perfil' element={<Perfil/>}/>
          <Route exact path='/perfil/votacion' element={<Votar/>} /> 
          <Route exact path='*' element={<Login/>} /> 
        </Routes>
        <ToastContainer />  
      </UserState>
    </>
  );

  function Layout() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <link to=''></link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

};
export default App;

//<UserState>      
//<Routes>
//  <Route exact path='/' element={<Login/>}></Route>          
//  <Route exact path='/perfil/votacion' element={<Votar/>}> </Route>
//  <Route exact path='/perfil' element={<Perfil/>}></Route>
//</Routes>  
//</UserState>

  //if (logueado) {
  //  return (<Login/>)
  //} else {
  //  return (<Inicio/>)
  //}

  //constructor (props) { 
  //  super(props);
  //  this.state = {
  //    logueado: false,
  //    username: ''
  //  }
  //}
  
  //renderLogin () {
  //  return (
  //    <Login />
  //  );
  //}
//
  //renderApp () {
  //  return(
  //    <Inicio />
  //  );
//
  //}
//
  //render() {
  //  if (this.state.logueado) {
  //    return( this.renderApp());
  //  } else {
  //    return (this.renderLogin())
  //  }
  //}