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

export default Party;