import { storiesJson } from './JsonData/stories';

export class TransportLayer {
    isDebug;

    constructor(isDebug) {
        this.isDebug = isDebug; // Will fetch data from local store if debug
    }

    public fetchStories(start, end) {
        let stories = [];

        if(this.isDebug) {
            return storiesJson.slice(start, end);
        }
    }
}