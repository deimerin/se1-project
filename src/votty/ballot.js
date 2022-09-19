import db from "../firebase/firebaseConfig";
import { updateDoc, doc, addDoc, collection } from "firebase/firestore";
import Candidate from "./candidate";
import sha256 from "crypto-js/sha256";
import Base64 from 'crypto-js/enc-base64';
import JSEncrypt from "jsencrypt";




class Ballot {
    constructor () {
        this._jsencrypt = new JSEncrypt();
        this._jsencrypt.setPublicKey('MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCZ1pTCquaCAY+2GQgGl7kGxCqGunQy4y+lQKH/xluS5CFABLb1dwtbuKqZg6jSr64xUwIsPjagPSxu20HSgw3vNjALrNyqNp0NKAxqmcMno00sQp9+Wr75mmLsTQyMa/nPNUoETVfhmUm35hHzXAv2pbOsNgELsV9lrLGhmparMQIDAQAB');
        //this._keyPublic = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCZ1pTCquaCAY+2GQgGl7kGxCqGunQy4y+lQKH/xluS5CFABLb1dwtbuKqZg6jSr64xUwIsPjagPSxu20HSgw3vNjALrNyqNp0NKAxqmcMno00sQp9+Wr75mmLsTQyMa/nPNUoETVfhmUm35hHzXAv2pbOsNgELsV9lrLGhmparMQIDAQAB';
    }

    vote = async (candidate, votter) => {
        console.log('desde ballot, candidate', candidate, 'votter', votter);        
        //const hasVoted = await votter.checkVote();
        const salt = parseInt(Math.random()*10000) + Date.now().toString();
        const hashvotante = salt + votter.id;
        
        const cand = {
            num : candidate.num,
            nombre: candidate.name
        };

        const hash = sha256(hashvotante).toString(Base64);
        let encrypt = this._jsencrypt.encrypt(JSON.stringify(cand));
        console.log('desde ballot: ', typeof encrypt)

        //console.log('desde ballot: ', hash , votter.cedula);
        if (!votter.hasVoted) {  

            const docRef1 = await addDoc(collection(db, "votty-bpoll"), {hash: hash, vote: encrypt});

            const docRef2 = await addDoc(collection(db, "votty-verf"), {hash: hash});

            //const docRef3 = await addDoc(collection(db, "Votaron"), {cedula: Number(votter.cedula)});

            votter.checkVote();



            console.log(docRef1, docRef2);
        } else {
            console.log('ya voto...')
        }
    }


}

export default Ballot;