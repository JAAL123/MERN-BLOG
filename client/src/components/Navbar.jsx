import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  return (
    <>
      <header>
        <a href="/" className="logo">
          MERN Blog
        </a>
        <nav className="">
          {isAuthenticated ? (
            <>
              <Link to="/profile">{user?.userName}</Link>
              <Link to="/create-post">Crear Post</Link>
              <Link onClick={logout} to="/">
                Cerrar Sesion
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">Iniciar Sesion</Link>
              <Link to="/register">Registrarse</Link>
            </>
          )}
        </nav>
      </header>
    </>
  );
}
