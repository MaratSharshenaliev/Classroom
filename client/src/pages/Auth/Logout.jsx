import React, {useEffect} from 'react';
import styles from "./logout.module.css";
import {useNavigate} from "react-router-dom";
import {useHttp} from "../../Config/exports/http.hook";

function Logout(){
    const Navigate = useNavigate()
    const {request,loader} = useHttp()
    const anotherStyles = {
            constructor:{
                display:"grid",
                gridTemplateColumns:"repeat(2,1fr)",
                gridTemplateRows:"100vh"
            },
            bg:{
                backgroundImage:'url(https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
            },
            fillBORDER:{
                transaction:"0.3s linear",
                border: '1px solid red'
            }
        }
        const handleToFindSize = () =>{
            if(window.screen.width > 1024) return true
        }

        ////Handle/// request to server and create new person here with form

        const [datas,setdatas] = React.useState({
            name:"",
            email:"",
            password:"",
            number:""
        })

        const ChangeHandles = event => {
            setdatas({...datas,[event.target.name]:event.target.value})
        }
        const Push = async (e) =>{
            e.preventDefault();
            try {
                if(datas.name){
                    const response = await request('http://localhost:4000/api/logout','post',{},{...datas})
                }
            }catch (e){
                console.log(e)
            }


        }

        return (
            <div style={handleToFindSize() && anotherStyles.constructor}>
                <div style={anotherStyles.bg} className={styles.a_viewport}></div>
                <div className={styles.b_viewport}>
                    <div className={styles.container}>
                        <form className={styles.form} onSubmit={Push}>
                            <h1 className={styles.h1}>Create accaunt Classroom</h1>
                            <hr align="center" width="99%" size="4" color="#ff9900" />
                            <br/>
                            <div className={styles.InputBox}>
                                { false ?? <label className={styles.label}>Имя обязательное</label>}
                                <input name ="name" type="text" onChange={ChangeHandles} placeholder={"Введите Имя"}/>
                            </div>
                            <div className={styles.InputBox}>
                                { false ?? <label className={styles.label}>Email обязательное</label>}
                                <input name = "email" type="email" onChange={ChangeHandles} placeholder={"Введите Email"}/>
                            </div>
                            <div className={styles.InputBox}>
                                { false ?? <label className={styles.label}>Password обязательное</label>}
                                <input name = "password" type="password"  onChange={ChangeHandles}placeholder={"Введите пороль"}/>
                            </div>
                            <div className={styles.InputBox}>
                                { false ?? <label className={styles.label}>номер обязательное</label>}
                                <input name = "number" type="text" onChange={ChangeHandles} placeholder={"Введите номер телефона 996"}/>
                            </div>
                            <div>
                                <button type={"submit"} disabled={loader} className={styles.AuthButtonOne} onClick={Push}>Регистрация</button>
                            </div>
                            <br/>
                            <hr align="center" width="99%" size="4" color="#ff9900" />
                            <div style={{textAlign:"center"}} className={styles.authButton}>
                                <a  className={styles.AuthButtonTwo} onClick={()=> Navigate('/login') }>Уже есть аккаунт?</a>
                            </div>
                            <h4 style={{textAlign:"center"}}>some text</h4>
                        </form>
                    </div>
                </div>
            </div>
        );
}

export default Logout;