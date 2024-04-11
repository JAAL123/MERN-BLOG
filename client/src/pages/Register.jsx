import { useForm } from "react-hook-form";

export function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    console.log(values);
     reset();
  });

  return (
    <div className="formContainer">
      <form action="" className="Register" onSubmit={onSubmit}>
        <h1>Registrarse</h1>
        <input
          type="text"
          placeholder="Nombre de Usuario"
          className="formInput"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <p className="formErrorMessage">Este campo es requerido</p>
        )}
        <input
          type="email"
          placeholder="Correo"
          className="formInput"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <p className="formErrorMessage">Este campo es requerido</p>
        )}
        <input
          type="password"
          placeholder="Contraseña"
          className="formInput"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <p className="formErrorMessage">Este campo es requerido</p>
        )}
        <input
          type="password"
          placeholder="Confirmar Contraseña"
          className="formInput"
          {...register("confirmPassword", { required: true })}
        />
        {errors.confirmPassword && (
          <p className="formErrorMessage">Este campo es requerido</p>
        )}
        <button className="formButton">Iniciar Sesión</button>
      </form>
    </div>
  );
}
