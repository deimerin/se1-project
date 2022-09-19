class Votter {
    constructor(id, name, _password, hasVoted) {
        this._id = id;
        this._name = name;
        this._password = this._password;
        this._hasVoted = hasVoted;
    }
    get id (){
        return this._id;
    }
    get name () {
        return this._name;
    }
    get password () {
        return this._password;
    }
    vote (candidate, salt) {
        if (typeof(candidate) == Candidate) {
            let ballot = new Ballot(candidate.id, candidate.name, salt, Date().toString())
        }   else {
            return false;
        }        
    }
    checkVote(){
        return this._hasVoted;
    }
}

class Candidate {
    constructor (id, firstName, lastName, party, picture) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        
        this._picture = picture;
        if (typeof(party) == Party) {
            this._party = party;    
        } else {
            this._party = false;
        }
    }
    get ballotId () {
        return this._id;
    }
    get firstName () {
        return this._firstName;
    }
    get lastName () {
        return this._lastName;
    }
    get party () {
        return this._party;
    }
    get picture () {
        return this._picture;
    }
}

class Party {
    constructor (id, name, logo) {
        this._logo = logo;
        this._name = name;
        this._id = id;
    }
    get id (){
        return this._id;
    }
    get name() {
        return this._name;
    }
    get logo() {
        return this._logo;
    }
}

class Ballot {
    constructor (candidateId, candidateName, salt, timestamp) {
        this._candidateId = candidateId;
        this._candidateName = candidateName;
        this._salt = salt;
        this._timestamp = timestamp;
    }
    get candidateId () {
        return this._candidateId;
    }
    get candidateName () {
        return this._candidateName;
    }
    get salt () {
        return this._salt;
    }
    get timestamp () {
        return this._timestamp;
    }
}


