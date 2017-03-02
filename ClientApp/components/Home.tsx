import * as React from 'react';
import {InList} from './Story/InList'    
import { inject, observer } from 'mobx-react';

@inject('storylineStore')
@observer
export class Home extends React.Component<any, void> {
    componentDidMount() {
        this.props.storylineStore.loadStories();
    }

    public render() {
        return <div className='story-width'>
                {this.props.storylineStore.stories.map(function(item, index) {
                    return <InList key={item[index].storyId} data={item[index]} type='text'/>
                })}
        </div>;
    }
}
