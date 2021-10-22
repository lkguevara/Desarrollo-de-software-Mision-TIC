import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Pages/home/index";
import PrivateLayout from './layouts/PrivateLayout';
import PublicLayout from './layouts/PublicLayout';
import MaestroVenta from "./Pages/sales/SaleMaster";
import AgregarVenta from "./Pages/sales/SaleAdd";
import EditarVenta from "./Pages/sales/SaleUpdate";
import AgregarProducto from "./Pages/products/Add";
import MaestroProductos from "./Pages/products/Master";
import ActualizarProducto from "./Pages/products/Update";
import MaestroUsuarios from "./Pages/users/Master";
import ActualizarUsuario from "./Pages/users/Update";
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
          <Route path={['/product/add', '/product/master', '/product/update']}>
            <PrivateLayout>
              <Switch>
                <Route path='/product/add'>
                  <AgregarProducto />
                </Route>
                <Route path='/product/master'>
                  <MaestroProductos />
                </Route>
                <Route path='/product/update'>
                  <ActualizarProducto />
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path={['/user/master', '/user/update']}>
            <PrivateLayout>
              <Switch>
                <Route path='/user/master'>
                  <MaestroUsuarios />
                </Route>
                <Route path='/user/update'>
                  <ActualizarUsuario />
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
