import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Splash from './pages/Splash/Splash';
import Layout from './Layout/Layout';
import Register from './pages/Register/Register';
import './App.scss';
import './Colors.scss';

function App() {
  return (
    <Router>
        <Layout>
            <Route exact={true} path="/" component={Splash} />
            <Route path="/register" component={Register} />
        </Layout>
    </Router>
  );
}

export default App;
