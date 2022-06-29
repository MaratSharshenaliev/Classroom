import React, {useContext} from "react";
import Context from "../../Config/exports/Context";
import Lenta from "./Cards/Lenta";
import Task from "./Cards/Task";
import Users from "./Cards/Users";
import {useHttp} from "../../Config/exports/http.hook";
import Spinner from "../../components/spinner/spinner";

const LoaderAndHeaderRender = ({id,Coure})=>{
        return (
            <>
            {
            id == 0 && <Lenta Coure = {Coure} /> ||
            id == 1 && <Task  Coure = {Coure} /> ||
            id == 2 && <Users Coure = {Coure} />
            }
            </>
        )
}

export default ({id}) => {
    const {loader,request} = useHttp()
    const [Coure,SetCoure] = React.useState({})
    const {Userid} = React.useContext(Context)
    const tableId = id == 0 && "page1" || id == 1 && "page2" || id == 2 && "page3";

    React.useEffect(()=>{
        SetCoure({})
        const data = request("http://localhost:4000/api/Courses/getCourse","post",{id:Userid,table:tableId})
            .then(res => SetCoure(res))
            .catch(err => console.log(err))
    },[id]);

    return (
        Coure.length ? <LoaderAndHeaderRender id = {id} Coure={Coure} /> : <Spinner/>
    )
}