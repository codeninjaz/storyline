import * as React from 'react';
import { Link } from 'react-router';
import { Votebar } from './Votebar';

export interface IStoryProps {
    body: React.ReactElement<any>;
}

export class Story extends React.Component<IStoryProps, void> {
    public render() {

        return <div className='story-width'>
            <div className='story-in-list'>
                <Votebar />
                <div className='story'>
                    <h1>Rödluvan</h1>
                    <p>3 dagar sedan av <Link to={'/profile/view/fluffmannen'}>fluffmannen</Link></p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>                    
                    {this.props.body}                    
                </div>
            </div>
        </div>;
    }
}
