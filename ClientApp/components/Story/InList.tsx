import * as React from 'react';
import { Link } from 'react-router';
import { Votebar } from './Votebar';

export class InList extends React.Component<any, void> {
    public render() {
        return <div className='story-in-list'>
                    <Votebar score={this.props.data.voteScore} storyId={this.props.data.storyId} />
                    <div className='story'>
                        <h2>
                            <Link to={`/story/view/${this.props.data.storyId}`}>
                                {this.props.data.title}
                            </Link>
                        </h2>
                        <p>{this.props.data.created} 
                            <Link to={`/profile/view/${this.props.data.by.id}`} >
                            {this.props.data.by.name}
                            </Link>
                        </p>
                        <p>{this.props.data.text}</p>
                    </div>                               
            </div>;
    }
}
