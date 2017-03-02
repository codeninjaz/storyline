import { observable, action} from 'mobx';

import {storiesJson} from '../JsonData/stories';

export class StorylineStore {
    @observable
    public test = 15;

    @observable
    public isDebug = true;

    @observable
    public stories = []

    private page = 0;
    @action loadStories = () => {
        if(this.isDebug) {
            let pageSize = 2
            let itemsToInsert = storiesJson.splice(this.page*pageSize, pageSize)
            this.stories.push(
                itemsToInsert
            )

            this.page++
        }
    }
}
