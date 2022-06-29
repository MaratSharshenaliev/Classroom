import {toast} from 'react-toastify';
import React from "react";

export const useMessage = () => {
    return React.useCallback((text, type) => {
        toast[type](text, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }, [])
}