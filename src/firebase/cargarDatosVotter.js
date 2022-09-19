import db from "./firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import data_vot from "./voters";


const cargarDatosVotter = async (estado) => {
    console.log('cargando datos...')
    const list_r = [];
    if(estado){
        for (let i = 0; i < data_vot.length; i++) {
            console.log(data_vot[i]);
            const obj = {
                full_name: data_vot[i].full_name,
                id: data_vot[i].id,
                password: data_vot[i].password,
                voted: data_vot[i].voted
            };
            const docRef = await addDoc(collection(db, "votty-vot"), obj);
            list_r.push(docRef)
        }
    };

}

export default cargarDatosVotter;