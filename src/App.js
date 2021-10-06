import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Home from "./Pages";
// import Slider from "./components/products/index";



function App() {
  return (
    <>
    <Router>
      <Home />
    </Router>
    {/* <Slider /> */}
          </>
  );
}

export default App;
