import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import { useAppState } from "./store";

export const Header = () => {
  const { cart } = useAppState();
  return (
    <header className="flex bg-gray-900 justify-between align-middle p-2 sm:p-3">
      <Link to="/">
        <img src={logo} className="h-10" alt="logo" />
      </Link>
      <Link to="/">
        <h1 className="text-lg sm:text-2xl p-2 block text-blue-200 font-semibold tracking-wider uppercase">
          Compy Product Store
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

export const BackLink = (props) => {
  return (
    <Link
      to="../"
      className="inline-block mt-4 px-4 py-3 ml-4 bg-blue-400 rounded text-gray-100 font-semibold uppercase shadow-lg sm:text-sm sm:font-bold hover:bg-blue-500 active:bg-blue-600"
      {...props}
    >
      &lt; Back
    </Link>
  );
};

export const SuccessButton = (props) => {
  return (
    <button
      className="rounded px-4 py-3 bg-green-400 text-gray-100 uppercase font-semibold shadow-lg sm:px-3 sm:text-sm sm:font-bold hover:bg-green-500 active:bg-green-600"
      {...props}
    />
  );
};
