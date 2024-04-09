
export  function Register() {
  return (
    <div className="formContainer">
    <form action="" className="Register">
    <h1>Registrarse</h1>
      <input type="text" placeholder="Nombre de Usuario" className="formInput" />
      <input type="email" placeholder="Correo" className="formInput"/>
      <input type="password" placeholder="Contraseña" className="formInput"/>
      <input type="password" placeholder="Confirmar Contraseña" className="formInput"/>
      <button className="formButton">Iniciar Sesión</button>
    </form>
  </div>
  )
}
