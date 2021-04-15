import React from 'react';
import s from '../Post/MyPosts.module.css'
import Post1 from './Post1';

const MyPosts = (props) => {
    let postMessage = [{id: 0, message: 'Hi,how are you?', likesCount: 12},
        {id: 1, message: 'It\'s my first post', likesCount: 11}];

    let postsElements=postMessage.map(p=><Post1 message={p.message} likesCount={p.likesCount}/>);
    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}


            </div>
        </div>
    )
}
export default MyPosts;