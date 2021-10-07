import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Home from "./Pages";
import MaestroVenta from "./Pages/Ventas/MaestroVenta";



function App() {
  return (
    <>
    <Router>
    <Home />
      <MaestroVenta />
    </Router>
          </>
  );
}

export default App;
