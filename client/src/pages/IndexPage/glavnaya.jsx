import React, {useContext} from 'react';
import style from "./index.module.css";
import Nav from "../../components/nav/Nav";
import context from "../../Config/exports/Context";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import Header from "../Header/Header";
import {useHttp} from "../../Config/exports/http.hook";
import Spinner from "../../components/spinner/spinner";

const Glavnaya = ({IdUser}) => {

    const [Courses, SetCourses] = React.useState({})
    const {request,loader} = useHttp()
    const navigate = useNavigate();
    const {urlBackground} = useContext(context);
    const [Have,SetValue] = React.useState(false)

    React.useEffect( ()=> {
        setTimeout(async ()=>{
                //need to do post request becouse haven`t found user this courses
                const data = await request("http://localhost:4000/api/Courses/","post", {id:IdUser})
                if(data){
                    SetCourses(data)
                    SetValue(true)
                }else{
                    navigate("/")
                }
        },1000)
    },[])
        return (
            <>
                <Header/>
                <div className={style.container}>
                    {Have ?
                        Courses.map((item,index) => {
                            return (
                                <div key = {index} className={style.content}>
                                    <div className={style.block}>
                                        <div className={style.OjOEXb + " " + style.Gf8MK} style={{backgroundImage: `url(${item.urlBackground})`}}></div>
                                        <div className={style.hover}>
                                            <NavLink className={style.a} to={"/Course/" + item.id}>{item.header}<br/></NavLink>
                                            <div className={style.YVvGBb +" "+ style.active}>{item.group}</div>
                                        </div>
                                        <div className={style.Vx8Sxd +" "+style.YVvGBb+" "+style.jJIbcc}>Сезя Искендер</div>
                                    </div>
                                </div>
                            )
                        } ): <Spinner/>}
                </div>
            </>
        );
};
export default Glavnaya;
