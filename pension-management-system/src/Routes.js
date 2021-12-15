import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SpringBootData from "./components/SpringBootData";
import React, { useEffect, useState } from 'react';

import Header from "./components/Header";
import AbstractRegister from './components/AbstractRegister';
import AbstractLogin from './components/AbstractLogin';
import AbstractLogout from './components/AbstractLogout';
import Page404 from './components/Page404';
import Home from './components/Home';
import Footer from './components/Footer';
import PensionDetails from './components/PensionDetails';


const Routes = () => {

    
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <div>
                            <Switch>

                                <Route path="/pension"> <PensionDetails /> </Route>
                                <Route path="/spring"> <SpringBootData /> </Route>
                                <Route exact path="/" loginStatus > <Home /> </Route>
                                <Route path="/home" loginStatus> <Home /> </Route>
                                <Route path="/register"> <AbstractRegister /> </Route>
                                <Route path="/login"> <AbstractLogin /> </Route>
                                <Route path="/*"> <Page404 /> </Route>
                                
                            </Switch>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </Router>
            </div>
        );
    }
    
export default Routes;