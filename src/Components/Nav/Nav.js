import React from 'react';
import s from "../Nav/nav.module.css";
import {NavLink} from "react-router-dom";  // создается клас со значением ИТЕМ
// для того чтоб конкретно для этих елемнтов были параметры

/*let c1='item';
let c2='active';
let classes = c1 + '' + c2;    если в классе есть свойство!
let ClasesNew = `${s.item} ${s.active}`;*/ //делается вот тако вот С ОБРАТНІМИ кавЫЧКАМИ!!

const nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/Cont" activeClassName={s.active}>Profile</NavLink>
            </div>

            <div className={`${s.item}
                        ${s.active}`}>
                <NavLink to="/Dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/WHAT?' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/post1' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/google' activeClassName={s.active}>Settings</NavLink>
            </div>

        </nav>
    );
}
export default nav;