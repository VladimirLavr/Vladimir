import {rerenderEntireTree} from "../render";

let state= {
    messagePage: {
        posts: [{id: 0, message: 'Hi,how are you?', likesCount: 12},
            {id: 1, message: 'It\'s my first post', likesCount: 11}]

    },
    DialogsPage: {
        messagesData: [{id: 1, message: 'How are you?'},
            {id: 2, message: 'Good'},
            {id: 3, message: 'Ok'},
            {id: 4, message: 'Ok'},
            {id: 5, message: 'Ok'}],
        dialogsData: [{id: 1, name: 'Dima'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Vladimir'},
            {id: 4, name: 'Stas'},
            {id: 5, name: 'Genadiy'},
            {id: 6, name: 'Vlad'},
            {id: 7, name: 'Tanya'}]
    }
}


export let addPost=(postMessage)=>{
    let newPost={
        id:5,
        message:postMessage,
        likesCount:0
    };
    state.messagePage.posts.push(newPost);
    rerenderEntireTree(state);
}
export default state;
