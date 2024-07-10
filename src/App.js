import { Link, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import "./build.css";
function App() {
  return (
    <div className="App">
      <div className="h-16"></div>
      <header className=" z-50 w-full bg-zinc-900 h-16 fixed top-0">
        <div className="max-w-6xl mx-auto flex justify-between px-20 text-white h-full items-center">
          <Link to="/e-commerce-2">
            <div className="text-3xl">LOGO</div>
          </Link>
          <nav className="text-xl gap-2 flex h-full items-center">
            <NavLink to="/e-commerce-2">home</NavLink>
            <NavLink to="/cart">checkout</NavLink>
          </nav>
          <div className="extra-links">
            <ul className="flex gap-2">
              <li>FAQ</li>
              <li>
                <i className="fa-solid fa-circle-info"></i>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/e-commerce-2" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
