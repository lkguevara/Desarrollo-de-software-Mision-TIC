import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Home from "./Pages";
import MaestroVenta from "./Pages/Ventas/MaestroVenta";
// import Slider from "./components/products/index";



function App() {
  return (
    <>
    <Router>
      <MaestroVenta />
    </Router>
    {/* <Slider /> */}
          </>
  );
}

export default App;
