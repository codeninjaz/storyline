import * as React from 'react';
import { Link } from 'react-router';
import { Votebar } from './Votebar';
import { observer } from 'mobx-react';
import { StoryRender } from './StoryRender';

@observer
export class InList extends React.Component<any, void> {
    public render() {
        return StoryRender(this.props.data, 'story-in-list', null, true);
    }
}



