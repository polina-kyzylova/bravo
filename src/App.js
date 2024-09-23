import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import MainPage from '@pages/MainPage/MainPage';
import ShopPage from '@pages/ShopPage/ShopPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/shop' element={<ShopPage />} />

        {/*----- error URL page -----*/}
        <Route path='*' exact={true} element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
