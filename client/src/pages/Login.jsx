export function Login() {
  return (
    <div className="formContainer">
      <form action="" className="Login">
        <h1>Iniciar Sesión</h1>
        <input
          type="text"
          placeholder="Nombre de Usuario"
          className="formInput"
        />
        <input type="password" placeholder="Contraseña" className="formInput" />
        <button className="formButton">Iniciar Sesión</button>
      </form>
    </div>
  );
}
