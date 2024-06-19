import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import OrderPage from "./components/OrderPage/OrderPage";
import "./App.css";
import OrderCompleted from "./components/OrderPageCompleted/OrderPageCompleted";

export default function App() {
  return (
    <Router>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/OrderPage">
        <OrderPage />
      </Route>
      <Route path="/OrderCompleted">
        <OrderCompleted />
      </Route>
    </Router>
  );
}
