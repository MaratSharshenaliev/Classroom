import React from "react";
import styles from "./login.module.css";
import {useNavigate} from "react-router-dom";
import {useHttp} from "../../Config/exports/http.hook";

function Login() {
    const navigate = useNavigate();
    const {request,loader} = useHttp()
    const anotherStyles = {
        "2":{
            color:"rgb(255,255,255)",
            fontSize:"26pt",
            marginBottom:"20px"
        },
        "3":{
            margin: "14.3% 30% 0%",

        },
        bgColor: {
            backgroundImage: "url(https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
        }
    }
    const [Sign,SetSing] = React.useState({
        email:"",
        password:""
    })
    const handleSetText = event =>{
        SetSing({...Sign,[event.target.name]:event.target.value})
    }
    const Push = async (e)=>{
        e.preventDefault();
        try {
            if(Sign.email){
                const response = await request('http://localhost:4000/api/login','post',{},{...Sign})
                    .then(ress => console.log(ress))
            }
        }catch (e){
            console.log(e)
        }
    }

    return (
        <div  style={anotherStyles.bgColor} className={styles.constructor}>
        <div className={styles.b_viewport}>
            <div className={styles.container}>
                <form className={styles.form}>
                    <h1 style={anotherStyles["2"]} >Login Classroom</h1>
                    <hr align="center" width="99%" size="4" color="#ff9900" />
                    <br/>
                    <div className={styles.label}>
                        <input onChange={handleSetText} name = "email" type="email" placeholder={"Введите Email"}/>
                    </div>
                    <div className={styles.label}>
                        <input onChange={handleSetText} name = "password" type="password" placeholder={"Введите пороль"}/>
                    </div>
                    <div className={styles.authButton}>
                        <button type={"submit"} disabled={loader} onClick={Push} className={styles.AuthButtonOne}>Войти</button>
                        <button disabled={loader} className={styles.AuthButtonTwo}
                                onClick={()=> navigate('/register')}
                        >Регистрация</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Login;