export default class Asset {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    updateName(name) {
        this.name = name;
    }
}