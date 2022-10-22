import React from "react";
import { Route, Routes, } from "react-router-dom";
import Home from "../components/home";
import PageNotFound from "../components/404";
import AuthLayout from "../layouts/auth/authlayout";
import LoginPage from "../layouts/auth/login";
import Register from "../layouts/auth/register";

function Router() {

  return (
    <Routes>
      <Route exact path="/auth" element = {<AuthLayout/>}>
        <Route path="login" element= {<LoginPage/>}/>
        <Route path="register" element = {<Register/>}/>
      </Route>
      <Route path="/" element = {<Home/>}/>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default Router;