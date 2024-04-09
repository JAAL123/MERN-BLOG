import "./App.css";
//componets and pages
import { Navbar } from "./components/Navbar";
import { ArticleList } from "./pages/ArticleList";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
//dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
