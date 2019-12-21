import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import RouteConstants from './RouteConstants';
import Splash from './pages/Splash/Splash';
import Login from './pages/Login/Login'
import Layout from './Layout/Layout';
import Register from './pages/Register/Register';
import './App.scss';
import './Colors.scss';

function App() {
  return (
    <Router>
        <Layout>
            <Route exact={true} path={RouteConstants.ROOT} component={Splash} />
            <Route path={RouteConstants.REGISTER} component={Register} />
            <Route path={RouteConstants.LOGIN} component={Login} />
        </Layout>
    </Router>
  );
}

export default App;
