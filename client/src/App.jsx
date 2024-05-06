import "./App.css";
//componets and pages
import { Navbar } from "./components/Navbar";
import { ArticleList } from "./pages/ArticleList";
import { Profile } from "./pages/Profile";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
//context
import { AuthProvider } from "./context/AuthContext";
import { PostProvider } from "./context/PostContext";
//dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreatePost } from "./pages/CreatePost";
import { Article } from "./pages/Article";
import { EditPost } from "./pages/EditPost";

function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <BrowserRouter>
          <main>
            <Navbar />
            <Routes>
              <Route path="/" element={<ArticleList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/create-post" element={<CreatePost />} />
              <Route path="/edit-post/:id" element={<EditPost />} />
              <Route path="/post/:id" element={<Article />} />
            </Routes>
          </main>
        </BrowserRouter>
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
