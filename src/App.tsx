import React from "react";
import FiltersArea from "./components/FiltersArea";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/productSlice";
import { actions as filterActions } from "./redux/filterSlice";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="app">
      <header className="header">
        <img src={require("./images/logo.png").default} className="logo" alt="Company logo" />
      </header>
      <FiltersArea />
      <footer className="footer">
        <button onClick={() => dispatch(filterActions.clearFilters())} className="footer-button transparent">
          Clear
        </button>
        <button onClick={() => dispatch(fetchProducts())} className="footer-button filled">
          Update
        </button>
      </footer>
    </div>
  );
}

export default App;
