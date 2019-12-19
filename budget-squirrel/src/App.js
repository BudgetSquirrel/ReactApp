import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Splash from './pages/Splash/Splash';
import Layout from './Layout/Layout';
import './App.scss';
import './Colors.scss';

function App() {
  return (
    <Router>
        <Layout>
            <Route path="/" component={Splash} />
        </Layout>
    </Router>
  );
}

export default App;
