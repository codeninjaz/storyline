import * as React from 'react';
import {StoryInList} from './StoryInList'

export class Home extends React.Component<any, void> {
    public render() {
        return <div>
                <StoryInList type='text'/>
                <StoryInList type='text'/>
                <StoryInList type='text'/>
                <StoryInList type='text'/>
                <StoryInList type='text'/>
        </div>;
    }
}
