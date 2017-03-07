import { storiesJson } from './JsonData/stories';

export class TransportLayer {
    isDebug;

    constructor(isDebug) {
        this.isDebug = isDebug; // Will fetch data from local store if debug
    }

    public fetchStories(start, end, callback) {
        if(this.isDebug) {
            callback(this.createResponse(TransportLayerStatus.Loading, null))
            setTimeout(function(){
                callback(this.createResponse(TransportLayerStatus.Ok, storiesJson.slice(start, end)))
            }.bind(this), 1000)            
        }
    }

    public fetchStory(id, callback) {
        if(this.isDebug) {
            callback(this.createResponse(TransportLayerStatus.Loading, null))
            setTimeout(function(){
                let story = storiesJson.find(s => s.storyId === id);
                if(story) {
                    callback(this.createResponse(TransportLayerStatus.Ok, story));
                } else {
                    callback(this.createResponse(TransportLayerStatus.Error, {"Type":"404", "Message": "Could not find item with id" + id}));
                }
            }.bind(this), 1000)            
        }        
    }

    public saveStory(json) {
        
    }

    public createResponse(status, data){
        return {
            status : status,
            data : data
        }
    }
}

export class TransportLayerStatus {
    public static Error = -1;
    public static Loading = 0;
    public static Ok = 1;    
}