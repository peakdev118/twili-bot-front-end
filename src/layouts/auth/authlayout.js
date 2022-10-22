import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout(props){
    const {} = props;
    return (
        <div>
            authlayout
            <Outlet/>
        </div>
    )
}

export default AuthLayout;