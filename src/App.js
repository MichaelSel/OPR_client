import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {PrivateRoute} from "./privateRoute";


import "./App.scss";

import Home from "./components/home/index"
import Register from "./components/register/index"
import Login from "./components/login/index"
import Profile from "./components/profile/index"
import Papers from "./components/papers/index";
import Read from "./components/read/index"
import Upload from "./components/upload/index"
import Nav from "./components/shared/nav"
import Footer from "./components/shared/footer";

function App() {
    return (
        <Router>
            <div className="App">

                <Nav/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                    <PrivateRoute path="/profile" component={Profile}/>
                    <Route path="/papers" component={Papers}/>
                    <Route path="/read/:paper" component={Read}/>
                    <PrivateRoute path="/upload" component={Upload}/>
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}


export default App