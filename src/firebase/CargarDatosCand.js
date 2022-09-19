import db from "./firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import data_cand from "./candidates";
import { useContext } from "react";

import UserContext from "../state/userContext";


const CargarDatosCand = async (estado) => {
    //const docRef1 = await addDoc(collection(db, "votty-bpoll"), {ash: hash});
    console.log('cargando datos...')
    const list_r = [];
    if(estado){
        for (let i = 0; i < data_cand.length; i++) {
            console.log(data_cand[i]);
            const obj = {
                ballot_number: data_cand[i].ballot_number,
                first_name: data_cand[i].first_name,
                last_name: data_cand[i].last_name,
                party: data_cand[i].party,
                picture: data_cand[i].picture
            };
            const docRef = await addDoc(collection(db, "votty-cand"), obj);
            list_r.push(docRef)
        }
    };

}

export default CargarDatosCand;