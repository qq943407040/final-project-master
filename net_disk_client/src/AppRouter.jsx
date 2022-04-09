import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from './Pages/Login'
import index from './Pages/main_index'
import Register from './Pages/Register';
import Login1 from './Pages/Login1'
import App from './Pages/components/test';
// const index = React.lazy(() => import('./Pages/main_index'));

//动态传值四个步骤：设置规则 传递值 接收值 显示内容

function AppRouter() {
    return (
        <Router>
            {/* 首页一般精确匹配 */}
            {/* <Suspense fallback={<div>Loading...</div>}>               */}
            <Route path="/" exact component={Login1}>
            </Route>
            <Route path="/index"  component={index}>
            </Route>
            <Route path="/login"  exact component={Login1}>
            </Route>
            <Route path="/register"  component={App}>
            </Route>
           {/* </Suspense> */}
        </Router>
    )
}

export default AppRouter;