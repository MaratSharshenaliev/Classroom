import React from 'react';
import style from './nav.module.css'
import {NavLink, useParams} from "react-router-dom";
import context from "../../Config/exports/Context";

const Nav = ({links}) => {
    const {id} = useParams()
    const {RandomColor} = React.useContext(context)
    return (
            <nav  className={style.nav} >
                <ul className={style.ul}>
                    {
                        links.map((item,index) => {
                            return <li
                                key = {index}>
                                        <NavLink
                                            style={{color:RandomColor}}
                                            className={style.a}
                                            to = {"/Course/"+id+ item.link}>
                                            {item.page}
                                        </NavLink>
                            </li>
                        })
                    }
                </ul>
            </nav>
    );
};

export default Nav;