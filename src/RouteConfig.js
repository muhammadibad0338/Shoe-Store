import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import About from './About'
import Product from './Product'
import NAvbar from './Navbar'
import Contact from "./Contact"
import ProductItem from "./ProductItem"
function RouteConfig() {
    return (

        <>
            
            <Router>
            <NAvbar />
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route  exact path="/product" component={Product} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/product/:id" component={ProductItem}/>
                    <Route path="*" component={() => <h2>Error 404 <br></br> Page Not Found</h2>} />
                </Switch>
            </Router>
        </>
    );
}

export default RouteConfig;