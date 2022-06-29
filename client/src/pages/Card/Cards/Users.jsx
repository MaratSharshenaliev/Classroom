import React from 'react';
import {HeaderRenderUsers} from "./HeaderRender";
import style from '../card.module.css'

const Users = ({Coure}) => {
    return (
        <>
            <div className={style.content_block}>
                <HeaderRenderUsers DATA={Coure}/>
            </div>
        </>
    );
};

export default Users;