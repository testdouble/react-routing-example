import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/profile">Profile</Link>
        </header>
        <Switch>
          <Route path="/product/:id">
            <ProductDetailPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/">
            <ProductsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

function ProductsPage() {
  return <div>Main Products Page</div>;
}

function ProductDetailPage() {
  return <div>Product Detail Page</div>;
}

function ProfilePage() {
  return <div>Profile Page</div>;
}
