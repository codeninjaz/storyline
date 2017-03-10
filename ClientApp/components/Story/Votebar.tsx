import * as React from 'react';
import { Link, browserHistory } from 'react-router';
import { inject, observer } from 'mobx-react';
import { IsAuthenticated } from '../IsAuthenticated';

export interface IVoteBarState {
    shorten: boolean;
}

export interface IVoteBarProps {
    storyId: number;
    score: number;
    voted: string;
}

@inject('storylineStore')
@observer
export class Votebar extends React.Component<IVoteBarProps, IVoteBarState> {
    constructor(props) {
        super(props);

        this.state = {
            shorten: true
        };
    }

    componentWillUnmount() {
        if(this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    public handleVoteUp() {
        IsAuthenticated(this.props.storylineStore, 
            function(status) {
                if(status) {
                    this.props.storylineStore.upvoteStory(this.props.storyId);
                    this.showFullScore();
                }
        }.bind(this))
    }

    public handleVoteDown() {
        IsAuthenticated(this.props.storylineStore, 
            function(status) {
                if(status) {
                    this.props.storylineStore.downvoteStory(this.props.storyId);
                    this.showFullScore();
                }
        }.bind(this))
    }

    private timeout = null;

    public showFullScore() {
        this.setState({shorten: false});
        this.timeout = setTimeout(function(){
            this.setState({shorten: true});
        }.bind(this), 5000)
    }

    public handleClickOnEdit() {
        IsAuthenticated(this.props.storylineStore, 
            function(status) {
                if(status) {
                    browserHistory.push(`/story/edit/${this.props.storyId}`);
                }
        }.bind(this))
    }

    public shortenVotes(voteScore) {
        if(!this.state.shorten) return voteScore;

        if(voteScore < 1000) {
            return voteScore;
        }

        if(voteScore >= 1000 && voteScore < 1000000) {
            return (voteScore / 1000).toFixed(0) + 'K';
        }

        if(voteScore >= 1000000) {
            return (voteScore / 1000000).toFixed(0) + 'M';
        }
    }

    public render() {
        let upvote = null;
        let downvote = null;

        if(this.props.voted === 'up') {
            upvote = <div className='up-vote disabled'>▲</div>
            downvote = <div className='down-vote' onClick={() => this.handleVoteDown()}>▼</div>;
        } 
        else if (this.props.voted === 'down') {
            upvote = <div className='up-vote' onClick={() => this.handleVoteUp()}>▲</div>
            downvote = <div className='down-vote disabled'>▼</div>;
        }
        else {
            upvote = <div className='up-vote' onClick={() => this.handleVoteUp()}>▲</div>
            downvote = <div className='down-vote' onClick={() => this.handleVoteDown()}>▼</div>;
        }

        return <div className='votebar'>
                    {upvote}
                    <div>
                        <span className='score' onClick={() => this.showFullScore()}>
                            {this.shortenVotes(this.props.score)}
                        </span>
                    </div>
                    {downvote}
                    <span className='edit' onClick={() => this.handleClickOnEdit()}>
                        ⚙
                    </span>
                </div>;
    }
}