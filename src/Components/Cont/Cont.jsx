import React from 'react';
import s from '../Cont/cont.module.css';

import MyPosts from './MyPosts/Post/MyPosts';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Cont = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}
export default Cont;