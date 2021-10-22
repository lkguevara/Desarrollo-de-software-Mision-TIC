import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Pages/home/index";
import PrivateLayout from './layouts/PrivateLayout';
import PublicLayout from './layouts/PublicLayout';
import MaestroVenta from "./Pages/sales/SaleMaster";
import AgregarVenta from "./Pages/sales/SaleAdd";
import EditarVenta from "./Pages/sales/SaleUpdate";
import './App.css';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path={['/sales/saleAdd', '/sales/saleMaster', '/sales/saleUpdate']}>
            <PrivateLayout>
              <Switch>
                <Route path='/sales/saleAdd'>
                  <AgregarVenta />
                </Route>
                <Route path='/sales/saleMaster'>
                  <MaestroVenta />
                </Route>
                <Route path='/sales/saleUpdate'>
                  <EditarVenta />
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path={['/']}>
            <PublicLayout>
              <Home />
            </PublicLayout>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
