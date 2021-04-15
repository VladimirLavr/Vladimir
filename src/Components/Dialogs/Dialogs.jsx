import React from "react";
import s from '../Dialogs/Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink> {/*'/dialogs/'+ props.id* ИЛИ ТАК СДЕлАТЬ вместо PATH!*/}
        </div>
    )
}
const Message = (props) => {

    return <div className={s.dialog}>{props.message}</div>


}
const Dialogs = (props) => {
    let dialogsData = [{id: 1, name: 'Dima'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Vladimir'},
        {id: 4, name: 'Stas'},
        {id: 5, name: 'Genadiy'},
        {id: 6, name: 'Vlad'},
        {id: 7, name: 'Tanya'}];

    let messagesData = [{id: 1, message: 'How are you?'},
        {id: 2, message: 'Good'},
        {id: 3, message: 'Ok'},
        {id: 4, message: 'Ok'},
        {id: 5, message: 'Ok'}];

    let DialogsElement = dialogsData
        .map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messagesData
        .map(m => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    DialogsElement
                }
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>


    )
}
export default Dialogs;