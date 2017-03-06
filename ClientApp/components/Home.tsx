import * as React from 'react';
import { InList } from './Story/InList';
import { inject, observer } from 'mobx-react';
import {ScrollWrapper} from './ScrollWrapper';

@inject('storylineStore')
@observer
export class Home extends React.Component<any, void> {
    public scrollToElement = null;
    
    public componentDidMount() {
        this.props.storylineStore.loadStories();
    }

    handleScroll(event) {
        this.props.storylineStore.loadStories();
    }

    public render() {
        return <div className='story-width'>
            <ScrollWrapper onWindowScroll={(event) => this.handleScroll(event)} scrollTo={this.scrollToElement}>
                {this.props.storylineStore.stories.map(function (item, index) {
                    console.log(item)
                    return <InList key={item.id} data={item} type='text' />
                })}

                <div ref={(element) => {this.scrollToElement = element}}></div> 
            </ScrollWrapper>
        </div>;
    }
}
