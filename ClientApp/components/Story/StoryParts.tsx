import * as React from 'react';
import { Link } from 'react-router';
import { Votebar } from './Votebar';
import { inject, observer } from 'mobx-react';

@inject('storylineStore')
export class StoryParts extends React.Component<any, void> {
    public render() {        
        if(this.props.parts.length === 0) return null;
        var p = this.props.parts[0];

        let i = 0;
        return <div className='story-part'>
                    <p>{p.text}</p>
                    <Link className='profile' to={'/profile/view/fluffmannen'}>fluffmannen</Link>                
                </div>;
    }
}
