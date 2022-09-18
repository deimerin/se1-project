import React from 'react'

const Administrador = () => {
  return (
      <div className='container  border pb-3 rounded' id='contenedor-administrador' >
          <div className="row border p-3" id='row-1'>
            <header className="d-flex justify-content-center">
              <ul className="nav nav-pills">
                <li className="nav-item"><a href="#" className="btn btn-outline-primary" aria-current="page"> Votaciones </a></li>
                <li className="nav-item"><a href="#" className="btn btn-outline-primary">Resultados</a></li>                
              </ul>
            </header>
          </div>
          <div className='row overflow-scroll border p-3' id='row2'>
            <div className='col-4 overflow-auto p-3 border' id='con-adm-col-4'>
              <div className="list-group ">
                <a href="#" className="list-group-item list-group-item-action">Votaciones Presidenciales</a>
                <a href="#" className="list-group-item list-group-item-action">Votaciones camara y senado</a>
                <a href="#" className="list-group-item list-group-item-action">Cosulta popular</a>
                <a href="#" className="list-group-item list-group-item-action">Cosulta popular</a>
                <a href="#" className="list-group-item list-group-item-action">Cosulta popular</a>
                <a href="#" className="list-group-item list-group-item-action">Cosulta popular</a>
                <a href="#" className="list-group-item list-group-item-action">Cosulta popular</a>
                <a href="#" className="list-group-item list-group-item-action">Cosulta popular</a>
                <a href="#" className="list-group-item list-group-item-action">Cosulta popular</a>
                <a href="#" className="list-group-item list-group-item-action">Cosulta popular</a>
                <a href="#" className="list-group-item list-group-item-action">Cosulta popular</a>
                <a href="#" className="list-group-item list-group-item-action">Cosulta popular</a>
                <a href="#" className="list-group-item list-group-item-action">Cosulta popular</a>
                <a href="#" className="list-group-item list-group-item-action">Cosulta popular</a>
                <a href="#" className="list-group-item list-group-item-action">Cosulta popular</a>
                <a href="#" className="list-group-item list-group-item-action">Cosulta popular</a>
                <a href="#" className="list-group-item list-group-item-action">Cosulta popular</a>
                <a href="#" className="list-group-item list-group-item-action">Cosulta popular</a>
                <a href="#" className="list-group-item list-group-item-action">Cosulta popular</a>
                <a href="#" className="list-group-item list-group-item-action">Cosulta popular</a>
                <a href="#" className="list-group-item list-group-item-action">Cosulta popular</a>
                <a href="#" className="list-group-item list-group-item-action">Cosulta popular</a>
                <a href="#" className="list-group-item list-group-item-action">Cosulta popular</a>
                <a href="#" className="list-group-item list-group-item-action">Cosulta popular</a>
                <a href="#" className="list-group-item list-group-item-action">Cosulta popular</a>
                <a href="#" className="list-group-item list-group-item-action">Cosulta popular</a>
                <a href="#" className="list-group-item list-group-item-action">Cosulta popular</a>
                <a href="#" className="list-group-item list-group-item-action">Cosulta popular</a>
              </div> 
            </div>
            <div className='col overflow-scroll border p-3 ' id='con-adm-col'>                
                <div className='row border p-3'>
                  <h6> Descripcion</h6>
                </div>
                <div className='row border p-3'>
                  <h6> Candidatos</h6>                    
                </div>
                <div className='row border p-3'>
                  <div className="card" id='card-adm'>
                    <img className="card-img-top" src="https://www.w3schools.com/bootstrap5/img_avatar1.png" alt="Card image" />
                    <div className="card-body">
                      <h4 className="card-title">John Doe</h4>
                      <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                      <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
       
  )
};

export default Administrador;

