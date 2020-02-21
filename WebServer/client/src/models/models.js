export class Player {
    constructor(obj = {}){
        this.userName = obj.userName || '';
        this.userEmail = obj.userEmail || '';
        this.color = obj.color || '';
    }
}