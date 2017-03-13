import * as React from 'react';
import { Link } from 'react-router';
import { Votebar } from './Votebar';
import { inject, observer } from 'mobx-react';

@inject('storylineStore')
export class View extends React.Component<any, void> {
    public render() {
        var c = this.props.storylineStore.activeStory.chapters;
        return <div>
            {c.map(function(item, index) {
                return <div key={item.chapterId} className='view-story'>
                            <Votebar/>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                            <Link className='profile' to={'/profile/view/fluffmannen'}>fluffmannen</Link>                
                        </div>        
            })}
                                                                   
        </div>;
    }
}
