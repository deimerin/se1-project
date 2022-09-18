import React, {useReducer} from "react";
import UserReducer from './userReducer';
import UserContext from "./userContext";
import Votter from "../votty/voter";
import db from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Candidate from "../votty/candidate";
import Ballot from "../votty/ballot";

const UserState = (props) => {
    const initialState = {
        db: db,
        user: new Votter(db),
        candidates: [],
        loggedStatus: false,
        password: '',
        cedula: '',
        candidate: new Candidate('', '', ''),
        ballot: new Ballot(parseInt(Math.random()*10000), Date.now().toString())
    };
    
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const getCandidates = async () => {
        const docSnap = await getDocs(collection(state.user.db, "Candidatos"));
        const list_candidates = [];
        docSnap.forEach((doc) => {
          list_candidates.push(new Candidate(
            doc.data().nombre,
            doc.data().partido,
            doc.data().foto,
            doc.data().numero
          ));
        });
        dispatch({
            type: 'SET_CANDIDATES',
            payload: list_candidates
        })
        return list_candidates;
    }

    const setInitialState = () => {
        dispatch ({
            type: 'SET_USER',
            payload: new Votter(db)
        })
        dispatch ({
            type: 'SET_LOGGEDSTATUS',
            payload: false
        })
        dispatch ({
            type: 'SET_PASSWORD',
            payload: ''
        })
        dispatch ({
            type: 'SET_CEDULA',
            payload: ''
        })
        dispatch ({
            type: 'SET_CANDIDATE',
            payload: new Candidate('', '', '')
        })
        dispatch({
            type: 'SET_CANDIDATES',
            payload: []
        })
    }

    const setUser = (user) => {
        dispatch ({
            type: 'SET_USER',
            payload: user 
        })
    }
    const setLoggedStatus = (status) => {
        dispatch ({
            type: 'SET_LOGGEDSTATUS',
            payload: status 
        })
    }
    const setPassword = (status) => {
        dispatch ({
            type: 'SET_PASSWORD',
            payload: status 
        })
    }
    const setCedula = (status) => {
        dispatch ({
            type: 'SET_CEDULA',
            payload: status 
        })
    }
    const setCandidate = (candidate) => {
        dispatch ({
            type: 'SET_CANDIDATE',
            payload: candidate 
        })
    }

    return (
        <UserContext.Provider value={{
            user: state.user,
            loggedStatus: state.loggedStatus,
            password: state.password,
            cedula: state.cedula,
            candidates: state.candidates,
            candidate: state.candidate,
            ballot: state.ballot,
            setUser,
            setLoggedStatus,
            setCedula,
            setPassword,
            setCandidate,
            getCandidates,
            setInitialState
        }}>
            {props.children}
        </UserContext.Provider>
    );    
};

export default UserState;











