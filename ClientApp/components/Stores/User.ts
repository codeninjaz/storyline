import { observable, action, computed, reaction} from 'mobx';

export class User {
    /**
     * unique id of this Story, immutable.
     */
    id = null;
    store = null;

    /**
     * Indicates whether changes in this object
     * should be submitted to the server
     */
    autoSave = true;

    /**
     * Disposer for the side effect that automatically
     * stores this User, see @dispose.
     */
    saveHandler = null;

    @observable username = null;  

    constructor(store, json) {
        this.store = store;
        this.updateFromJson(json);

        this.saveHandler = reaction(
            // observe everything that is used in the JSON:
            () => this.asJson,
            // if autoSave is on, send json to server
            (json) => {
                if (this.autoSave) {
                    this.store.transportLayer.saveUser(json);
                }
            }
        );
    }

    @computed get asJson() {
        return {
            id: this.id,
            //todo: måste ha med user här också då
        };
    }

    /**
     * Update this Story with information from the server
     */
    updateFromJson(json) {
        // make sure our changes aren't send back to the server
        this.autoSave = false;
        this.username = json.username;
        this.autoSave = true;
    }

    dispose() {
        // clean up the observer
        this.saveHandler();
    }         
}