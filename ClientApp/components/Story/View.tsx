import * as React from 'react';
import { Link } from 'react-router';
import { Votebar } from './Votebar';
import { inject, observer } from 'mobx-react';
import { StoryParts } from './StoryParts';

@inject('storylineStore')
export class View extends React.Component<any, void> {
    public render() {
        var c = this.props.storylineStore.activeStory.chapters;
        return <div>
            {c.map(function(item, index) {
                return <StoryParts key={item.chapterId} parts={item.storyParts} />
            })}
        </div>;
    }
}