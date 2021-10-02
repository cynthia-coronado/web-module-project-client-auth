import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Logout = ()=> {
    axiosWithAuth()
    .post('/logout')
    .then(response => {
        console.log(response.data.payload);
        localStorage.removeItem('token')
        console.log(window.location);
        window.location.href = '/login'
    })
    .catch(error => {
        console.log(error);
    })
    return(<div></div>);
}

export default Logout