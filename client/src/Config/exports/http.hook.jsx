import React from "react";
import axios from "axios";
import {useMessage} from "./message.hook";


export const useHttp = () => {
    const [loader, setLoader] = React.useState(false);
    const message = useMessage()

    const request = React.useCallback(async (url, method, headers = {}, body = {}) => {
        try {
            setLoader((pre) => pre = true)
            const {data} = await axios(url, {
                method,
                data: body,
                headers
        })
            setLoader((pre) => pre = false)
            return data
        } catch (e) {
            message('Что-то пошло не так!', 'error')
            setLoader((pre) => pre = false)
        }
    }, [])

    return {request, loader}
}