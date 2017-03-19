import * as React from 'react';
import { Link } from 'react-router';
import { Votebar } from './Votebar';
import { inject, observer } from 'mobx-react';
import { StoryRender } from './StoryRender';

export interface IStoryProps {
    body: React.ReactElement<any>;
}

@inject('storylineStore')
@observer
export class Story extends React.Component<any, void> {
    componentDidMount()
    {        
        this.props.storylineStore.loadStory(this.props.params.storyID);
        window.scrollTo(0, 0);
    }

    public render() {
        let view = null;
        if(this.props.storylineStore.storyLoad) {
            view = <div className='story-in-list'>
                        <h1>LADDAR -- todo</h1>
                    </div>
        } 
        else if(this.props.storylineStore.activeStory) {
            view = StoryRender(this.props.storylineStore.activeStory, 'story-unlimited', this.props.body, false)
        }
        else {
            view = <div className='story-in-list'>
                        <h1> ERROR -- todo </h1>
                    </div>
        }
        return <div className='story-width'>
                    {view}
                </div>;
    }
}
