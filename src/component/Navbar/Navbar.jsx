import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="d-flex w-100">
        <div className="w-25">
          <Link className="text-decoration-none text-light" to="/">
            E-Commerce
          </Link>
        </div>
        <ul className="w-50 list-unstyled d-flex">
          <li className="px-2">
            <Link className="text-decoration-none text-light" to="/">
              Home
            </Link>
          </li>
          <li className="px-2">
            <Link className="text-decoration-none text-light" to="/shop">
              Shop
            </Link>
          </li>
          <li className="px-2">
            <Link className="text-decoration-none text-light" to="/counter">
              Counter
            </Link>
          </li>
          <li className="px-2">
            <Link className="text-decoration-none text-light" to="/todo">
              Todo-list
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
