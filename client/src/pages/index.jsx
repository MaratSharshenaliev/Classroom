import React, {useEffect} from 'react'
import Card from './Card/Card'
import {Route, Routes, Navigate, useNavigate, useParams, Redirect} from 'react-router-dom'
import {useHttp} from "../Config/exports/http.hook";
import Context from "../Config/exports/Context";
import Loader from "../components/spinner/spinner";
import Header from "./Header/Header";
import style from "./index.module.css"

const Index = ({id,headerText}) => {

    const Links = [
        {link:"/214124125",page:"Главная" },
        {link:"/235235235",page:"Задание" },
        {link:"/23526435",page:"Пользователи" }
    ]
    return(
        <>
            <Header Links = {Links} headerText = {headerText}/>
            <div className={style.container}>
                <Routes>
                    <Route path={Links[0].link}   element={<Card id = {0}  />}/>
                    <Route path={Links[1].link}   element={<Card id = {1}  />}/>
                    <Route path={Links[2].link}  element={<Card id = {2}  />}/>
                    <Route path={"*"} element = {<Navigate to = {"/Course"+"/"+id+Links[0].link}/>} />
                </Routes>
            </div>
        </>
    )
}

function Course() {
    const {request,loader} = useHttp();
    const {id} = useParams()
    const navigate  = useNavigate();

    const [Header,SetHeader] = React.useState({})
    const [RandomColor,SetColor] = React.useState("")

    useEffect(()=> {
        SetHeader({})
           setTimeout(()=>{
               const data = request("http://localhost:4000/api/Course/","post",{id:id})
                   .then(ress => {
                       SetHeader(ress[0]);
                       SetColor(ress[0].Theme)
                   })
                   .catch(err => navigate("/"))
           },1000)
    },[id])

    return (
        <div className="Course" >
            <Context.Provider
                value={{
                    Userid:Header.id,
                    RandomColor
            }}>
                {Header.id ? <Index id = {id} headerText = {Header} /> : <Loader/> }
            </Context.Provider>
        </div>
    );
}

export default Course;

