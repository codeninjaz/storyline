import { observable, action } from 'mobx';

import { storiesJson } from '../JsonData/stories';

export class StorylineStore {
    @observable
    public test = 15;

    @observable
    public isDebug = true;

    @observable
    public stories = [];

    private page = 0;

    @action
    public loadStories = () => {
        if (this.isDebug) {
            const pageSize = 2;
            const itemsToInsert = storiesJson.slice(this.page * pageSize, pageSize);
            itemsToInsert.map((item, index) => {
                this.stories.push(item);
            });
            this.page++;
        }
    }
}
