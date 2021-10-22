import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Home from "./Pages";
import MaestroVenta from "./Pages/SaleMaster/index";
import AgregarVenta from "./Pages/SaleAdd/index";
import EditarVenta from "./Pages/SaleUpdate/index";
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
