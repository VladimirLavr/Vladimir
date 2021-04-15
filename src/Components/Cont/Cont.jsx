import React from 'react';
import s from '../Cont/cont.module.css';

import MyPosts from './MyPosts/Post/MyPosts';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Cont = () => {
    let posts =
        [{id: 0, message: 'Hi,how are you?', likesCount: 12},
        {id: 1, message: 'It\'s my first post', likesCount: 11}];
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}
export default Cont;