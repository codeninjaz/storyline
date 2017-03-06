import { observable, action, computed, reaction} from 'mobx';

export class Story {
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
     * stores this Todo, see @dispose.
     */
    saveHandler = null;

    @observable title = '';
    @observable text = '';
    @observable voteScore = 0;
    @observable created = '';
    @observable author = null;        

    constructor(store, json) {
        this.store = store;
        this.updateFromJson(json);

        this.saveHandler = reaction(
            // observe everything that is used in the JSON:
            () => this.asJson,
            // if autoSave is on, send json to server
            (json) => {
                if (this.autoSave) {
                    this.store.transportLayer.saveStory(json);
                }
            }
        );
    }

    @computed get asJson() {
        return {
            id: this.id,
            title: this.title,
            text: this.text,
            voteScore: this.voteScore,
            created: this.created,
            authorId: this.author ? this.author.id : null
        };
    }

    /**
     * Update this todo with information from the server
     */
    updateFromJson(json) {
        // make sure our changes aren't send back to the server
        this.autoSave = false;
        this.title = json.title;
        this.text = json.text;
        this.id = json.storyId;
        this.voteScore = json.voteScore;
        this.created = json.created;
        this.author = json.author;
        this.autoSave = true;
    }        

    dispose() {
        // clean up the observer
        this.saveHandler();
    }
}
