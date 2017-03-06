import { observable, action, computed, reaction} from 'mobx';

import {Story} from './Story';

export class StorylineStore {
    transportLayer;

    constructor(transportLayer) {
        this.transportLayer = transportLayer; // Thing that can make server requests for us
    }

    @observable
    public stories = [];

    private page = 0;

    @action
    public loadStories = () => {
        const pageSize = 2;
        let startIndex = this.page * pageSize;
        const itemsToInsert = this.transportLayer.fetchStories(startIndex, startIndex + pageSize);

        itemsToInsert.map((item, index) => {
            this.stories.push(new Story(this, item));
        });
        this.page++;
    }
}
