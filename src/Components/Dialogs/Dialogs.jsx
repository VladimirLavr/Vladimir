import React from "react";
import s from '../Dialogs/Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink> {/*'/dialogs/'+ props.id* ИЛИ ТАК СДЕлАТЬ вместо PATH!*/}
        </div>
    );
}

const Message = (props) => {

    return <div className={s.dialog}>{props.message}</div>

}
const Dialogs = (props) => {
    let newDialogsElement=React.createRef();
    let addDialogs=()=>{
        let dialogs=newDialogsElement.current.value;
        alert(dialogs);
    }
let newMessageElement=React.createRef();
let addMessage=()=>{
let message=newMessageElement.current.value;
alert(message);
}



    let DialogsElement = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messagesData.map(m => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {DialogsElement}
                <div className={s.textarea} >
                    <textarea ref={newDialogsElement}> </textarea>
                </div>
                <div className={s.button}>
                    <button onClick={addDialogs}>
                        отправить
                    </button>
                </div>

            </div>
            <div className={s.messages}>
                { messagesElements }
                <div className={s.textarea}>
                    <textarea ref={newMessageElement}> </textarea>
                </div>
                <div className={s.button}>
                    <button onClick={addMessage}>
                        отправить
                    </button>
                </div>
            </div>

        </div>


    )
}
export default Dialogs;