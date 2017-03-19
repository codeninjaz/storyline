import { storiesJson } from './JsonData/stories';
import { usersJson } from './JsonData/users';

export class TransportLayer {
    isDebug;

    constructor(isDebug) {
        this.isDebug = isDebug; // Will fetch data from local store if debug
    }

    public fetchStories(start, end, callback) {
        if(this.isDebug) {
            callback(this.createResponse(this.Status.Loading, null, 0))

            setTimeout(function(){
                callback(this.createResponse(this.Status.Loading, null, 25))
            }.bind(this), 250)   

            setTimeout(function(){
                callback(this.createResponse(this.Status.Loading, null, 50))
            }.bind(this), 500)

            setTimeout(function(){
                callback(this.createResponse(this.Status.Loading, null, 75))
            }.bind(this), 750)

            setTimeout(function(){
                callback(this.createResponse(this.Status.Loading, null, 100))
            }.bind(this), 900)            

            setTimeout(function(){
                callback(this.createResponse(this.Status.Ok, storiesJson.slice(start, end), 100))
            }.bind(this), 1000)            
        }
    }

    public fetchStory(id, callback) {
        if(this.isDebug) {
            callback(this.createResponse(this.Status.Loading, null, 0))
            
            setTimeout(function(){
                let story = storiesJson.find(s => s.storyId === id);
                if(story) {
                    callback(this.createResponse(this.Status.Ok, story, 100));
                } else {
                    callback(this.createResponse(this.Status.Error, {"Type":"404", "Message": "Could not find item with id" + id}, 100));
                }
            }.bind(this), 1000)            
        }        
    }

    public saveStory(json) {
        
    }

    public login(username, password, callback) {
        if(this.isDebug) {
            callback(this.createResponse(this.Status.Loading, null, 0));
            setTimeout(function(){
                let user = usersJson.find(s => s.username === username);
                if(user && password) {
                    callback(this.createResponse(this.Status.Ok, user, 100));
                } else {
                    callback(this.createResponse(this.Status.Error, {"Type":"500", "Message": 'Could not login user'}, 100));
                }
            }.bind(this), 1000)             
        }
    }

    public fetchUser(id) {

    }

    public createResponse(status, data, percentage){
        return {
            status : status,
            loadingPercentage: percentage,
            data : data
        }
    }

    public Status = {
        Error : -1,
        Loading : 0,
        Ok : 1         
    }
}