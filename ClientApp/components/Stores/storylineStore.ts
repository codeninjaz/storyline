import { observable, action, computed, reaction} from 'mobx';
import {Story} from './Story';
import {TransportLayerStatus} from '../TransportLayer';

export class StorylineStore {
    transportLayer;

    constructor(transportLayer) {
        this.transportLayer = transportLayer; // Thing that can make server requests for us
    }

    @observable
    public stories = [];

    @observable
    public storiesLoad = false;

    @observable
    public activeStory = null;

    @observable
    public storyLoad = false;
    
    private page = 0;

    @action
    public loadStories = () => {
        const pageSize = 2;
        let startIndex = this.page * pageSize;
        this.transportLayer.fetchStories(startIndex, startIndex + pageSize, 
        function(result) {
            if(result.status === TransportLayerStatus.Ok) {
                result.data.map((item, index) => {
                    this.stories.push(new Story(this, item));
                });

                this.storiesLoad = false;
            }
            else if(result.status === TransportLayerStatus.Loading) {
                this.storiesLoad = true;
            }
        }.bind(this));
        this.page++;
    }

    @action loadStory = (id) => {
        let parsedId = parseInt(id);
        if(this.activeStory) {
            if(this.activeStory.id === parsedId) {
                return;
            }
        }
        
        let story = this.stories.find(s => s.id === parsedId);
        if(story) {
            this.activeStory = story
            return;
        }

        this.transportLayer.fetchStory(parsedId, function(result) {
            if(result.status === TransportLayerStatus.Ok) {
                this.activeStory = new Story(this, result.data);
                this.storyLoad = false;
            }
            else if(result.status === TransportLayerStatus.Loading) {
                this.storyLoad = true;
            }
            else {
                this.storyLoad = false;
            }                        
        }.bind(this))
    }

    @action
    public upvoteStory = (id) => {
        let story = this.stories.find(s => s.id === id);
        if(story) {
            story.voteUp();
        }
    }

    @action
    public downvoteStory = (id) => {
        let story = this.stories.find(s => s.id === id);
        if(story) {
            story.voteDown();
        }        
    }    
}
