import db from "../firebase/firebaseConfig";
import { setDoc, doc, addDoc, collection } from "firebase/firestore";
import Candidate from "./candidate";


class Ballot {
    constructor (salt, timestamp) {
        this._salt = salt;
        this._timestamp = timestamp;
    }
    get candidateId () {
        return this._candidate.ballotId;
    }
    get candidateName () {
        return this._candidate.name;
    }
    get salt () {
        return this._salt;
    }
    get timestamp () {
        return this._timestamp;
    }

    vote = async (candidate, votter) => {
        console.log('desde ballot, candidate', candidate, 'votter', votter);        
        const hasVoted = await votter.checkVote();
        let hash = this._salt + this.timestamp + candidate.name;
        console.log('desde ballot: ', hash , votter.cedula);
        if (!hasVoted) {  

            const docRef1 = await addDoc(collection(db, "Urna"), {ash: hash});

            const docRef2 = await addDoc(collection(db, "Urna-BU"), {hash: hash});

            const docRef3 = await addDoc(collection(db, "Votaron"), {cedula: Number(votter.cedula)});

            console.log(docRef1, docRef2, docRef3);
        } else {
            console.log('ya voto...')
        }
    }


}

export default Ballot;