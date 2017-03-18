import * as React from 'react';
import { Link } from 'react-router';
import { Votebar } from './Votebar';
import { inject, observer } from 'mobx-react';

export interface IStoryProps {
    body: React.ReactElement<any>;
}

@inject('storylineStore')
@observer
export class Story extends React.Component<any, void> {
    componentDidMount()
    {        
        this.props.storylineStore.loadStory(this.props.params.storyID);
        window.scrollTo(0, 0);
    }

    public render() {
        let view = null;
        if(this.props.storylineStore.storyLoad) {
            view = <div className='story-in-list'>
                        <h1>LADDAR -- todo</h1>
                    </div>
        } 
        else if(this.props.storylineStore.activeStory) {
            let s = this.props.storylineStore.activeStory;
            view = <div className='story-unlimited'>
                        <Votebar score={s.voteScore} storyId={s.id} voted={s.voted}/>
                        <div className='story'>
                            <h1>{s.title}</h1>
                            <p>{s.created}
                                <Link to={`/profile/view/${s.author.id}`}>
                                    {s.author.name}
                                </Link>
                            </p>
                            <p>{s.text}</p>
                            <p>
                                {s.author.text}
                            </p>
                            {this.props.body}                    
                        </div>
                    </div>
        }
        else {
            view = <div className='story-in-list'>
                        <h1> ERROR -- todo </h1>
                    </div>
        }
        return <div className='story-width'>
                    {view}
                </div>;
    }
}
