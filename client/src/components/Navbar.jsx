import { Link } from "react-router-dom";

export  function Navbar() {
  return (
    <>
      <header>
        <a href="/" className="logo">
          MERN Blog
        </a>
        <nav className="">
          <Link to={"/login"}>Iniciar Sesión</Link>
          <Link to={"/register"}>Registrar</Link>
        </nav>
      </header>
    </>
  );
}
