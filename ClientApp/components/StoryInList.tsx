import * as React from 'react';

export class StoryInList extends React.Component<any, void> {
    public render() {
        return <div className='story-in-list'>
                    <div className='voting-container'>
                        <div><span className='glyphicon glyphicon-arrow-up'/></div>
                        <div><span>10.5k</span></div>
                        <div><span className='glyphicon glyphicon-arrow-down'/></div>
                    </div>
                    <div className='voting-container'>
                        <span className='glyphicon glyphicon-bold'/>
                    </div>
                    <div className='story'>
                        <h2>Rödluvan</h2>
                        <p>3 dagar sedan av <a href='#'>fluffmannen</a></p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>                                
            </div>;
    }
}
