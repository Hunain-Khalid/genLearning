import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

/**
 * Created routing in app.js
 * the problem at this moment is in the route path we have
 * "/" which will "activate" other pages AND the home
 * component, using exact will only allow exactly that
 * page to render, or can use switch , no londer requring
 * exact keyword, routing to be done most specific to most
 * generic, in networking, reloading entire pages costly,
 * people moved to spas or single page applications, with only
 * fraction of code needed to be accounted for
 *
 */
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/products" component={Products} />
            <Route path="/posts" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
