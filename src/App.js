import { BrowserRouter, Routes, Route } from 'react-router-dom'; // chuyen trang khong phai load lai
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home"
import Header from "./Component/Header"

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} /> // truy cap vao duong dan thi se hien thi thanh phan home cung voi header
        </Routes>
    </BrowserRouter>
  );
}

export default App;
