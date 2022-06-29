import React, {useEffect, useState} from 'react';
import LentaStyle from './css/Lenta.module.css'
import TaskStyle from './css/Task.module.css'
import UsersStyle from './css/Users.module.css'
import context from "../../../Config/exports/Context";


const HeaderRender = ({DATA}) =>{
    const {RandomColor} = React.useContext(context)
    return(
        DATA.map((item,index)=>{
                return(<div
                    className={LentaStyle.h1}
                    key = {index}

                >
                    {item.task}
                </div>)
            })
    )
}

const HeaderRenderTask = ({DATA}) =>{
    const [id, setId] = React.useState(null)
    const {RandomColor} = React.useContext(context)
    const handleOverflow = (index) =>{
        id == index ?  setId(null) : setId(index)
    }
    const styles = {
        boxShadow: '0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        paddingBottom: '200px',
    }
    //'rgba(252, 213, 180, 0.53)'

    const activeStyle = {
        backgroundColor: RandomColor,
        borderRadius: '7px',
    }


    return(
        DATA.map((item,index)=>{
                return(
                        <div
                            onClick={()=> handleOverflow(index)}
                            className={TaskStyle.h2}
                            key = {index}
                            style = {id == index ? styles : undefined}

                        >
                            <div
                                style={id == index ? activeStyle : undefined}
                                className={TaskStyle.box}>
                                {item.task}
                            </div>
                        </div>
                )
            })
    )
}
const HeaderRenderUsers = ({DATA}) =>{
    const {RandomColor} = React.useContext(context)

    return(

        DATA.map((item,index)=>{
                return item.role != "admin" &&
                    <div className={UsersStyle.h2}
                         key = {index}
                         style = {{borderBottom: '0.0625rem solid #e0e0e0'}}>{item.task}</div>

            })
    )
}
export {
    HeaderRenderUsers,
    HeaderRender,
    HeaderRenderTask
};

