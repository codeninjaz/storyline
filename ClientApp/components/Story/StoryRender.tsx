import { Link } from 'react-router';
import { Votebar } from './Votebar';
import * as React from 'react';

const StoryRender = ((myProps, classNameForStoryWrapper, body, isLink) => (
           <div className={classNameForStoryWrapper}>
                <Votebar score={myProps.voteScore} storyId={myProps.id} voted={myProps.voted} />
                <div className='story'>
                    {isLink ? <h2>
                        <Link to={`/story/view/${myProps.id}`}>
                            {myProps.title}
                        </Link>
                    </h2> : <h1>{myProps.title}</h1>}
                    <p className='creation'>
                        <span>{myProps.created}</span>
                        <Link to={`/profile/view/${myProps.author.id}`}>
                            {myProps.author.name}
                        </Link>
                    </p>
                    <p>{myProps.text}</p>                    
                    {body}
                </div>                                              
            </div>           
))

export {StoryRender}
