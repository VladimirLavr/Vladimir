let rerenderEntireTree=()=>{
    console.log('state changed');
}

let state= {
    messagePage: {
        posts: [{id: 0, message: 'Hi,how are you?', likesCount: 12},
            {id: 1, message: 'It\'s my first post', likesCount: 11}],
        newPostText:'Lavrikov!!'

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


export const addPost=( )=>{
    let newPost={
        id:5,
        message: state.messagePage.newPostText ,
        likesCount:0
    };
    state.messagePage.posts.push(newPost);
    state.messagePage.newPostText='';
    rerenderEntireTree(state);
}

export const updateNewPostText=(newText)=>{

    state.messagePage.newPostText=newText;
    rerenderEntireTree(state);
}
export const subscribe=(observer)=>{
    rerenderEntireTree=observer;
}
export default state;
