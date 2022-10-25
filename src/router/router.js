import React from "react";
import { Route, Routes, } from "react-router-dom";
import Home from "../contents/home/index";
import PageNotFound from "../components/404";
import AuthLayout from "../layouts/auth/authlayout";
import LoginPage from "../layouts/auth/login";
import Register from "../layouts/auth/register";
import MainLayout from "../layouts/main/layout";

function Router() {

  return (
    <Routes>
      <Route path="/auth" element = {<AuthLayout/>}>
        <Route path="login" element= {<LoginPage/>}/>
        <Route path="register" element = {<Register/>}/>
      </Route>
      <Route path="/" element = {<MainLayout/>}>
        <Route index element = {<Home/>} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default Router;