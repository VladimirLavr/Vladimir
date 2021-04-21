import React from 'react';
import s from '../Cont/cont.module.css';

import MyPosts from './MyPosts/Post/MyPosts';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Cont = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}/>
        </div>
    )
}
export default Cont;