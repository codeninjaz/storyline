import * as React from 'react';
import {InList} from './InList'
import { Link, browserHistory  } from 'react-router';
import { inject, observer } from 'mobx-react';
import { IsAuthenticated } from '../IsAuthenticated';

export interface IStoryEditState {
    showmore: boolean;
    edit: boolean;
}

@inject('storylineStore')
export class Edit extends React.Component<any, IStoryEditState> {

    constructor() {
        super();   
        this.state = {showmore : false, edit: false }
    }

    componentDidMount() {
        IsAuthenticated(this.props.storylineStore, 
            function(status) {
                if(!status) {
                    browserHistory.push('/');
                }
        });
    }

    handleClickOnShowMore(e) {
        e.preventDefault()
        this.setState({showmore: !this.state.showmore, edit: this.state.edit})
    }

    handleClickOnAddStory(e) {
        this.setState({showmore: this.state.showmore, edit: !this.state.edit})
    }

    handleClickOnCancel(e) {
        this.setState({showmore: this.state.showmore, edit: !this.state.edit})
    }

    public render() {
        let showmorediv = null

        if(this.state.showmore){
                showmorediv = <div className='show-more'>
                    <div className='view'>
                        <div className='voting-container'>
                            <div><span className='glyphicon glyphicon-arrow-up'/></div>
                            <div><span>10.5k</span></div>
                            <div><span className='glyphicon glyphicon-arrow-down'/></div>
                        </div>

                        <div className='story'>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                            <Link className='profile' to={'/profile/view/fluffmannen'}>fluffmannen</Link>                   
                        </div>
                    </div>

                    <div className='view'>
                        <div className='voting-container'>
                            <div><span className='glyphicon glyphicon-arrow-up'/></div>
                            <div><span>10.5k</span></div>
                            <div><span className='glyphicon glyphicon-arrow-down'/></div>
                        </div>

                        <div className='story'>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                            <Link className='profile' to={'/profile/view/fluffmannen'}>fluffmannen</Link>                   
                        </div>
                    </div>

                    <button className='btn btn-default'>Load more</button>                    
                </div> 
        }


        let editdiv = null
        if(this.state.edit === false) {
                editdiv = 
                <div className='edit-div'>
                    <div className='voting-container'>
                        <button className='btn btn-success' onClick={(e) => this.handleClickOnAddStory(e)}>+</button>
                    </div>                 
                    
                    <div className='story'>
                        <p>3 dagar kvar</p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                        <Link className='profile' to={'/profile/view/fluffmannen'}>fluffmannen</Link>                   
                    </div>
                </div>        
        }
        else {
            editdiv = <div className='edit-div-textarea'>
                        <textarea />
                        <div>
                            <button onClick={(e) => this.handleClickOnCancel(e)} className='btn btn-success'>Cancel</button>
                            <button className='btn btn-default'>Ok</button>
                        </div>
                        </div>
        }

        return <div>
            <div><Link to={'/story/view/123'}><span className='glyphicon glyphicon-eye-open'/></Link></div>


            <div className='view'>                
                <div className='voting-container'>
                    <div><span className='glyphicon glyphicon-arrow-up'/></div>
                    <div><span>10.5k</span></div>
                    <div><span className='glyphicon glyphicon-arrow-down'/></div>                    
                </div>

                <div className='story'>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                    <Link className='profile' to={'/profile/view/fluffmannen'}>fluffmannen</Link>
                </div>
            </div>

            <div className='view'>
                <div className='voting-container'>
                    <h3>2</h3>
                </div>                

                <div className='voting-container'>
                    <div><span className='glyphicon glyphicon-arrow-up'/></div>
                    <div><span>10.5k</span></div>
                    <div><span className='glyphicon glyphicon-arrow-down'/></div>
                    <div><span className='glyphicon glyphicon-eye-open'/></div>
                </div>

                <div className='story'>
                    <p>Tiden har passerat</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                    <Link className='profile' to={'/profile/view/fluffmannen'}>fluffmannen</Link>
                </div>
            </div>


            <div className='view'>
                <div className='voting-container'>
                    <h3>3</h3>
                </div>                

                <div className='voting-container'>
                    <div><span className='glyphicon glyphicon-arrow-up'/></div>
                    <div><span>10.5k</span></div>
                    <div><span className='glyphicon glyphicon-arrow-down'/></div>
                    <div><a href='#' onClick={(event) => this.handleClickOnShowMore(event)}><span className='glyphicon glyphicon-eye-open'/></a></div>
                </div>

                {editdiv}

                {showmorediv}

            </div> 


            <div className='view'>
                <div className='voting-container'>
                    <h3>4</h3>
                </div>                

                <div className='voting-container'>
                    <div><span className='glyphicon glyphicon-arrow-up'/></div>
                    <div><span>10.5k</span></div>
                    <div><span className='glyphicon glyphicon-arrow-down'/></div>
                    <div><span className='glyphicon glyphicon-eye-open'/></div>
                </div>

                <div className='voting-container'>
                    <button className='btn btn-default'>+</button>
                </div>                 
                
                <div className='story'>
                    <p>3 dagar kvar</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                    <Link className='profile' to={'/profile/view/fluffmannen'}>fluffmannen</Link>
                </div>
            </div>                                                 
        </div>;
    }
}
