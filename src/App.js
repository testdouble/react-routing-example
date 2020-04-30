import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StoreProvider } from "./store.js";
import { Header } from "./components";
import ProductsPage from "./pages/Products";
import ProductDetailsPage from "./pages/ProductDetails";
import ProfilePage from "./pages/Profile";
import EditProfilePage from "./pages/EditProfile";

export default function App() {
  return (
    <Router>
      <StoreProvider>
        <Header />
        <Switch>
          <Route path="/products/:id">
            <ProductDetailsPage />
          </Route>
          <Route path="/profile/edit">
            <EditProfilePage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/">
            <ProductsPage />
          </Route>
        </Switch>
      </StoreProvider>
    </Router>
  );
}
