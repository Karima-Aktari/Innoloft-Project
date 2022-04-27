import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Shared/Header/Header';
import MainPage from './components/Dashboard/MainPage/MainPage';
import ProductPage from './components/Dashboard/ProductPage/ProductPage';

function App() {
  return (
    <div className="">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} >
            <Route path={`/dashBoard/mainpage`} element={<MainPage />} />
            <Route path={`/dashBoard/productpage`} element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
