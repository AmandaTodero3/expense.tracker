import React from "react";
import "./App.css";
import { Header } from "./Header";
import { Balance } from "./Balance";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <IncomeExpenses />
        <Balance />
      </div>
    </div>
  );
}

export default App;
