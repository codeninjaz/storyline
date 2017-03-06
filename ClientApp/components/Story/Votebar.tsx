import * as React from 'react';
import { Link } from 'react-router';
import { inject, observer } from 'mobx-react';

@inject('storylineStore')
@observer
export class Votebar extends React.Component<any, void> {

    public handleVoteUp() {
        this.props.storylineStore.upvoteStory(this.props.storyId);
    }

    public handleVoteDown() {
        this.props.storylineStore.downvoteStory(this.props.storyId);
    }

    public render() {

        return <div className='votebar'>
                    <div className='up-vote' onClick={() => this.handleVoteUp()}>▲</div>
                    <div><span>{this.props.score}</span></div>
                    <div className='down-vote' onClick={() => this.handleVoteDown()}>▼</div>

                    <Link className='edit' to={`/story/edit/${this.props.storyId}`}>
                        ⚙
                    </Link>
                </div>;
    }
}