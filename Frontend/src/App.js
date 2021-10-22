import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Home from "./Pages/home/index";
import MaestroVenta from "./Pages/sales/SaleMaster";
import AgregarVenta from "./Pages/sales/SaleAdd";
import EditarVenta from "./Pages/sales/SaleUpdate";
import './App.css';


function App() {
  return (
    <>
    <Router>
      <Home />
      <EditarVenta />
      <AgregarVenta />
      <MaestroVenta />
    </Router>
          </>
  );
}

export default App;
