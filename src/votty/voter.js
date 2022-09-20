import Candidate from "./candidate";
import Ballot from "./ballot";
import db from "../firebase/firebaseConfig";

import { collection, getDocs, query, doc, where, updateDoc } from "firebase/firestore";

class Votter {
  constructor(db) {
    this._id = '';
    this._name = '';
    this._password = '';
    this._autenticado = false;
    this._hasVoted = false;
    this._db = db;
    this._idVotter = '';
  }

  get db () {
    return this._db;
  }

  get id() {
    return this._id;
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

  get idVotter() {
    return this._idVotter
  }

  setData(cedula, password) {
    this._id = cedula;
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
      collection(this._db, "votty-vot"),
      where("id", "==", String(this._id))
    );

    const docSnap = await getDocs(q);
    const lst = [];
    docSnap.forEach((doc) => {
      lst.push([doc.data().id, doc.data().voted]);
    });

    if((lst.length == 1) & (this._id == lst[0][0]) & (!lst[0][1])){
      const votter = doc(db, "votty-vot", this._idVotter);
      await updateDoc(votter, {
      voted: true
      });
      this._hasVoted = true;
    }
  }
  //Autentica al usuario, comprobando que los datos enviados coincidan
  //devuelve true e inicializa los demas campos de la clase, de lo contrario
  //no realiza cambios
  
  autenticarVotante = async () => {
    const q = query(
      collection(this._db, "votty-vot"),
      where("id", "==", String(this._id))
    );
    const docSnap = await getDocs(q);

    const list_votter = [];
    docSnap.forEach((doc) => {
      //console.log(doc.id);
      list_votter.push([
        doc.data().id,
        doc.data().password,
        doc.data().full_name,
        doc.data().voted,
        doc.id
      ]);
    });
    if (list_votter.length === 1) {
      if (list_votter[0][1] === this._password) {
        this._name = list_votter[0][2];
        this._id = list_votter[0][0];
        this._autenticado = true;
        this._hasVoted = list_votter[0][3];
        this._idVotter = list_votter[0][4];

        return this._autenticado;
      } else {
        
        return false;
      }
    }
  };
}

export default Votter;
