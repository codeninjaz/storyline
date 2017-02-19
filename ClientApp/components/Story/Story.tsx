import * as React from 'react';
import { Link } from 'react-router';

export interface IStoryProps {
    body: React.ReactElement<any>;
}

export class Story extends React.Component<IStoryProps, void> {
    public render() {

        return <div>
            <div className='story-in-list'>
                <div className='voting-container'>
                    <div><span className='glyphicon glyphicon-arrow-up'/></div>
                    <div><span>10.5k</span></div>
                    <div><span className='glyphicon glyphicon-arrow-down'/></div>
                </div>
                <div className='story'>
                    <p>3 dagar sedan</p>
                    <h1>Rödluvan</h1>
                </div>
            </div>
            {this.props.body}
        </div>;
    }
}
