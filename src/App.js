import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav'
import Cont from './Components/Cont/Cont';
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/header/Header";
import {BrowserRouter,Route} from "react-router-dom";
import MyPosts from "./Components/Cont/MyPosts/Post/MyPosts";
import Post1 from "./Components/Cont/MyPosts/Post/Post1";

const App = (props) => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
           <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route  path ='/Dialogs'  component={Dialogs}/>
                <Route path ='/Cont'  component={Cont}/>
                <Route path ='/What' component={MyPosts}/>
                <Route path ='/post1' component={Post1}/>


            </div>

        </div>
        </BrowserRouter>
    );
}
export default App;
