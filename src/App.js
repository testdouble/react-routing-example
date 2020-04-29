import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/product/:id">
            <ProductDetailPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/profile/edit">
            <EditProfilePage />
          </Route>
          <Route path="/">
            <ProductsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const NavLink = (props) => (
  <Link className="p-2 ml-auto text-blue-200 text-lg" {...props} />
);

const Header = () => {
  return (
    <header className="flex bg-gray-900 align-middle p-3">
      <img src={logo} className="h-10" alt="logo" />
      <h1 className="text-2xl p-2 ml-auto block text-blue-200 font-semibold tracking-wider uppercase">
        Simple Store
      </h1>
      <NavLink to="/profile">Profile</NavLink>
    </header>
  );
};

function ProductsPage() {
  return <div>Main Products Page</div>;
}

function ProductDetailPage() {
  return <div>Product Detail Page</div>;
}

function ProfilePage() {
  return <div>Profile Page</div>;
}

function EditProfilePage() {
  return <div>Edit Profile Page</div>;
}
