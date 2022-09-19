import React, { Component } from 'react'
import './Registro.css'

const Registro = () => {
  
  return (
    <form>
      <div className="form-group"> 
          <label htmlFor="nombre-completo-id" className="control-label">Nombre completo</label>
          <input type="text" className="form-control" id="nombre-completo-id" name="nombre-completo" placeholder="Nombre Completo" />
      </div>    
      <div className="form-group"> 
          <label htmlFor="cedula-id" className="control-label">Cedula de ciudadania</label>
          <input type="text" className="form-control" id="cedula-id" name="cedula" placeholder="Cedula de ciudadania" />
      </div>                    
      <div className="form-group"> 
          <label htmlFor="lugar-id" className="control-label">Lugar de expedicion del documento</label>
          <select className="form-control" id="state_id">
              <option value="AL">Lugar de expedicion</option>
              <option value="AL">Bucaramanga</option>
              <option value="AK">Florida Blanca</option>
              <option value="AZ">Bogota</option>
          </select>
      </div>
      <div className="form-group"> 
          <label htmlFor="f-expedicioin-id" className="control-label">Fecha de expedicion</label>
          <input type="text" className="form-control" id="f-expedicion-id" name="f-expedicioin" placeholder="Fecha de expedicion" />
      </div>    
      <div className="form-group"> 
          <label htmlFor="cel_id" className="control-label">Celular</label>
          <input type="text" className="form-control" id="celular-id" name="celular" placeholder="Celular" />
      </div>    
      
      <div className="form-group"> 
        <button type="submit" className="btn btn-primary">Realizar registro</button>
      </div>                                
    </form>
    
  );
  
};

export default Registro;
