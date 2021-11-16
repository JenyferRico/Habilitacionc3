import React from 'react'
import {
    Switch,
    BrowserRouter as Router,
    Route, 

  } from "react-router-dom";


import PrivateLayout from '../Layout/PrivateLayout';
import PublicLayout from '../Layout/PublicLayout';
import Dashboard from '../Pages/Admin/Dashboard';
import Roles from '../Pages/Admin/Roles';
import Ventas from '../Pages/Admin/Ventas';
import Index from '../Pages/Public/Index';
import Features from '../Pages/Public/Features';

const Routes = () => {
    return (
        <Router>
        <Switch>
            <Route path={['/dash', '/roles', '/ventas']}>
                <PrivateLayout>
                    <Switch>
                        <Route path='/dash'>
                            <Dashboard/>
                        </Route>
                        <Route path='/roles'>
                            <Roles/>
                        </Route>
                        <Route path='/ventas'>
                            <Ventas />
                        </Route>
                    
                    </Switch>

                </PrivateLayout>
            </Route>
            <Route path={['/features','/']}>
                <PublicLayout>
                    <Switch>
                        <Route path='/features'>
                            <Features/>
                        </Route>
                        <Route path='/'>
                            <Index/>
                        </Route>
                    </Switch>
                </PublicLayout>
            </Route>

        </Switch>
    </Router>
    )
}

export default Routes
