import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Products } from './pages/Products/Products.jsx';
import { Home } from './pages/Home/Home.jsx';
import { Contact } from './pages/Contact/Contact.jsx';
import Header from "./components/Header.jsx";

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
  );
}

export default App;