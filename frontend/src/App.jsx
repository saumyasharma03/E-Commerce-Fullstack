import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Footer from "./components/Footer";
import bannermens from './assets/bannermens.png'
import bannerwomens from './assets/bannerwomens.png'
import bannerkids from './assets/bannerkids.png'
import Connect from './components/Connect.jsx'

export default function App() {
  return (
    <main className="bg-primary text-tertiary">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mens" element={<Category category="men" banner={bannermens}/>}/>
        <Route path="/connect" element={<Connect/>}/>
        <Route path="/womens" element={<Category category="women" banner={bannerwomens}/>}/>
        <Route path="/kids" element={<Category category="kid" banner={bannerkids}/>}/>
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/cart-page" element={<Cart />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
      <Footer />
      </BrowserRouter>  
    </main>
  )
}