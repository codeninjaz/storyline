import * as React from 'react';
import { Link } from 'react-router';
import { inject, observer } from 'mobx-react';

@inject('storylineStore')
@observer
export class View extends React.Component<any, void> {
    public render() {
        console.log('storylineStore', this.props.storylineStore);

        return <div>
            <h1>TEST={this.props.storylineStore.test}</h1>
            <div><Link to={'/story/edit/123'}><span className='glyphicon glyphicon-cog' /></Link></div>

            <div className='view'>
                <div className='voting-container'>
                    <div><span className='glyphicon glyphicon-arrow-up' /></div>
                    <div><span>10.5k</span></div>
                    <div><span className='glyphicon glyphicon-arrow-down' /></div>
                </div>

                <div className='story'>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                    <Link className='profile' to={'/profile/view/fluffmannen'}>fluffmannen</Link>
                </div>
            </div>


            <div className='view'>
                <div className='voting-container'>
                    <div><span className='glyphicon glyphicon-arrow-up' /></div>
                    <div><span>10.5k</span></div>
                    <div><span className='glyphicon glyphicon-arrow-down' /></div>
                </div>

                <div className='story'>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                    <Link className='profile' to={'/profile/view/fluffmannen'}>fluffmannen</Link>
                </div>
            </div>



            <div className='view'>
                <div className='voting-container'>
                    <div><span className='glyphicon glyphicon-arrow-up' /></div>
                    <div><span>10.5k</span></div>
                    <div><span className='glyphicon glyphicon-arrow-down' /></div>
                </div>

                <div className='story'>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                    <Link className='profile' to={'/profile/view/fluffmannen'}>fluffmannen</Link>
                </div>
            </div>



            <div className='view'>
                <div className='voting-container'>
                    <div><span className='glyphicon glyphicon-arrow-up' /></div>
                    <div><span>10.5k</span></div>
                    <div><span className='glyphicon glyphicon-arrow-down' /></div>
                </div>

                <div className='story'>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                    <Link className='profile' to={'/profile/view/fluffmannen'}>fluffmannen</Link>
                </div>
            </div>
        </div>;
    }
}