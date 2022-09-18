import Candidate from "./candidate";
import Ballot from "./ballot";
import db from "../firebase/firebaseConfig";

import { collection, getDocs, query, where } from "firebase/firestore";

class Votter {
  constructor(db) {
    this._cedula = '';
    this._name = '';
    this._password = '';
    this._autenticado = false;
    this._hasVoted = false;
    this._db = db;
  }

  get db () {
    return this._db;
  }

  get cedula() {
    return this._cedula;
  }
  get name() {
    return this._name;
  }

  get autenticado () {
    return this._autenticado;
  }
  get hasVoted () {
    return this._hasVoted;
  }

  setData(cedula, password) {
    this._cedula = cedula;
    this._password = password;
  }

  vote(candidate, salt) {
    if (typeof candidate == Candidate) {
      let ballot = new Ballot(
        candidate.id,
        candidate.name,
        salt,
        Date().toString()
      );
    } else {
      return false;
    }
  }

  checkVote = async() => {
    const q = query(
      collection(this._db, "Votaron"),
      where("cedula", "==", Number(this._cedula))
    );
    const docSnap = await getDocs(q);

    //setTimeout(true,5000);

    const lst = [];
    docSnap.forEach((doc) => {
      lst.push(doc.data().cedula);
    });

    console.log(lst.length);

    if((lst.length > 0) & (this._cedula == lst[0])){
      this._hasVoted = true;
    }
    console.log('hasvote: ', lst[0], ' ', this._hasVoted)
    return this._hasVoted;
  }
  //Autentica al usuario, comprobando que los datos enviados coincidan
  //devuelve true e inicializa los demas campos de la clase, de lo contrario
  //no realiza cambios
  
  autenticarVotante = async () => {
    console.log('haciendo consulta...')
    const q = query(
      collection(this._db, "Usuarios"),
      where("cedula", "==", Number(this._cedula))
    );
    const docSnap = await getDocs(q);

    //setTimeout(true,5000);

    const list_votter = [];
    docSnap.forEach((doc) => {
      list_votter.push([
        doc.data().cedula,
        doc.data().contraseña,
        doc.data().nombres,
        doc.data().apellidos,
      ]);
    });
    if (list_votter.length === 1) {
      //console.log("num doc devueltos:", list_votter.length);
      //console.log(
      //  "tipo contraseña: ",
      //  typeof list_votter[0][1],
      //  typeof this._password
      //);
      //console.log("valor contraseña: ", list_votter[0][1]);
      //console.log('contraseña votante', this._password);
      if (list_votter[0][1] === this._password) {
        this._name = list_votter[0][2] + " " + list_votter[0][3];
        this._autenticado = true;
        //console.log('contraseña votante',list_votter[0][1]);
        //console.log('autenticado.');
        return this._autenticado;
      } else {
        //console.log('retiurn: ', false)
        return false;
      }
    }
  };
}

export default Votter;
