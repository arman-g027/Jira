import { Login, Register } from './pages/auth';
import MainLayout from "./components/layouts/Main";
import { ROUTE_CONSTANTS } from "./core/utils/constants";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import './styles/global.css';


const App = () => {
  return (
    <RouterProvider
      router={
        createBrowserRouter(
          createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
              <Route path={ROUTE_CONSTANTS.LOGIN} element={<Login />} />
              <Route path={ROUTE_CONSTANTS.REGISTER} element={<Register />} />
            </Route>
          )
        )
      }

    />
  )
};

export default App;
