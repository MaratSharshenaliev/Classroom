import React from 'react';
import {HeaderRender} from "./HeaderRender";
import style from '../card.module.css'
import context from "../../../Config/exports/Context";
const Lenta = ({Coure}) => {
    const {RandomColor} = React.useContext(context)
    return (
        <>
            <div className={style.content}>
                <div style={{backgroundColor: RandomColor}} className={style.header}></div>
                <div className={style.block}>
                    <div className={style.item}></div>
                </div>
                <div className={style.content_block}>
                    <HeaderRender  DATA={Coure} />
                </div>
            </div>
        </>
    );
};

export default Lenta;