import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


//CONTEXT
import UserContext from "../state/userContext";


const MostrarCandidato = () => {
    const { candidate } = useContext(UserContext);


    if (candidate.name == '' & candidate.party == '') {
        return (
            <>
                <br />
                <img
                    src="https://docs.google.com/uc?export=download&id=1-YVGnjEM9hOS1RT-zAFVa8Ca3yQ23aJQ"
                    id='picture-votty-vot'
                    className="img-rounded"
                    alt="Cinque Terre "
                />
                <br />
                <br />
                <h5>Bienvenido al proceso de votacion, <br /> por favor elija al candidato de su preferencia</h5>
                <br />
            </>
        );
    } else {
        return (
            <>
                <div className="card align-items-center justify-content-center text-center p-3" id='card-vot'>
                    <img
                        src={candidate.picture}
                        id='picture-p'
                        alt="Cinque Terre"
                    />
                    <div className="card-body">
                        <h5 className="card-title">{candidate.name}</h5>
                        <h5 className="card-title">Partido: {candidate.party}</h5>
                    </div>
                </div>
            </>
        );
    }
}

export default MostrarCandidato;

