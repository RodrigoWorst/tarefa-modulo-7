import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Catalog from './Pages/Catalog';
import Home from './Pages/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cars">
          <Catalog />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
