import Party from './party';

class Candidate {
    
    constructor ( name, party, picture, numero) {
        this._name = name;
        this._picture = picture;
        this._party = party;
        this._num = numero;
    }
    get name () {
        return this._name;
    }
    get party () {
        return this._party;
    }
    get picture () {
        return this._picture;
    }
    get ballotId () {
        return this._num;
    }
    get num () {
        return this._num;
    }
}

export default Candidate;