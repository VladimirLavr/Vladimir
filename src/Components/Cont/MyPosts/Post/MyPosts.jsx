import React from 'react';
import s from '../Post/MyPosts.module.css'
import Post1 from './Post1';
const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p=><Post1 message={p.message} likesCount={p.likesCount}/>)
    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <div>
                <div>
                    <textarea> </textarea>
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