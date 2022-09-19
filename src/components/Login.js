import React, { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import CargarDatosVotter from "../firebase/cargarDatosVotter";


//COMPONENTES


//CONTEXT
import UserContext from "../state/userContext";


const Login = () => {
  const { loggedStatus, estado, user, setUser, setLoggedStatus, setPassword, setCedula, password, cedula } =
  useContext(UserContext);

  const navigate = useNavigate();


  

  //Se ejecuta cuando se activa el evento del botton, se aplica al formulario
  const handleSumit = async (e) => {
    e.preventDefault();
    user.setData(cedula, password);
    const ls = await user.autenticarVotante();
    setLoggedStatus(ls);

    //console.log(estado);
    //if (estado) {
    //  CargarDatosVotter(estado);
    //  setEstado(false);
    //}
    if (loggedStatus) {
      //setUser('votter');
      //setCedula('');      
      setPassword('');
    } else {
      setPassword('');
      //user.setData('', '');
    }
  }

  //captura los datos almacenados en los inputs
  const handleInputChange = (e) => {
    console.log('handleinputchange')
    const { name, value } = e.target;
    if (name === 'password') {
      setPassword(value);
    }
    if (name === 'cedula') {
      setCedula(value);
    }
  };

  useEffect(() => {
    if (loggedStatus) {
      navigate('/perfil');
    }
    
    
  }, [loggedStatus, estado]);

  //modifica los cambios al ingresar los datos cedula y contraseña
  return (
    <div className="text-center border">
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSumit}>
          <img
            className="mb-4 center"
            src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Coat_of_arms_of_Colombia.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Realizar proceso de votacion</h1>
          <div className="form-floating">
            <input
              name="cedula"
              type="text"
              className="form-control"
              id="cedula-id"
              placeholder="Cedula de ciudadania"
              onChange={handleInputChange}
              value={cedula}
            />
            <label htmlFor="cedula-id">Cedula de ciudadania</label>
          </div>
          <div className="form-floating">
            <input
              name="password"
              type="password"
              className="form-control"
              id="contraseña-id"
              placeholder="Contraseña"
              onChange={handleInputChange}
              value={password}
            />
            <label htmlFor="contraseña-id">Contraseña</label>
          </div>
          <div className="row pt-3">
            <div className="col">
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Ingersar
              </button>
            </div>
          </div>
          <p className="mt-5 mb-3 ">
            &copy; Universidad Industrial de Santander 2022
          </p>
        </form>
      </main>
    </div>
  );
};

export default Login;


