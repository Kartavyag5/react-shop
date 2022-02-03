import React from "react";
import Home from "../components/home"
import UserStore from "../stores/userStore"



const HomePage = ()=>{

    const store = new UserStore()
    return(
        <>
        <h1>HomePage</h1>
        <Home store={store} />
        </>
    );
}
export default HomePage