import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import logo from "./logo.svg";
import { StoreProvider, useAppState } from "./store.js";

export default function App() {
  return (
    <Router>
      <StoreProvider>
        <Header />
        <Switch>
          <Route path="/products/:id">
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
      </StoreProvider>
    </Router>
  );
}

const Header = () => {
  const { cart } = useAppState();
  return (
    <header className="flex bg-gray-900 justify-between align-middle p-3">
      <Link to="/">
        <img src={logo} className="h-10" alt="logo" />
      </Link>
      <Link to="/">
        <h1 className="text-lg sm:text-2xl p-2 block text-blue-200 font-semibold tracking-wider uppercase">
          Simple Store
        </h1>
      </Link>
      <div className="flex align-middle">
        <div className="text-lg p-2 text-blue-200">Cart ({cart.length})</div>
        <Link className="p-2 text-blue-200 text-lg" to="/profile">
          Profile
        </Link>
      </div>
    </header>
  );
};

function ProductsPage() {
  const { products } = useAppState();
  return (
    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="m-2 rounded border border-gray-200 shadow-lg bg-white">
        <div className="flex justify-center pt-4">
          <img
            className="block h-40"
            src={product.imgSrc}
            alt={product.title}
          />
        </div>
        <div className="flex justify-between mt-2 p-6">
          <div className="text-gray-800">{product.title}</div>
          <div className="font-bold text-gray-800 ml-4">
            {product.price.formatted}
          </div>
        </div>
      </div>
    </Link>
  );
}

function ProductDetailPage() {
  const { id } = useParams();
  const { products } = useAppState();
  const product = products.find((p) => p.id == id);

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <div className="bg-white py-6">
      <Link
        to="/"
        className="inline-block mx-4 px-4 py-2 bg-blue-400 rounded text-gray-100 font-semibold uppercase hover:bg-blue-500"
      >
        &lt;- Back
      </Link>
      <div className="mt-4 flex justify-evenly">
        <div>
          <img src={product.imgSrc} alt={product.title} className="h-64" />
        </div>
        <div>
          <h1 className="text-4xl text-gray-800">{product.title}</h1>
          <div className="text-gray-800 text-lg">{product.description}</div>
          <div className="mt-3 text-gray-800 text-lg">
            Price: <span className="font-bold">{product.price.formatted}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfilePage() {
  return <div>Profile Page</div>;
}

function EditProfilePage() {
  return <div>Edit Profile Page</div>;
}
