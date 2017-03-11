import { observable, action, computed, reaction} from 'mobx';

export class UserStore {
    transportLayer;

    constructor(transportLayer) {
        this.transportLayer = transportLayer; // Thing that can make server requests for us
    }

    @action
    public loadUser = (id) => {

    }        
}