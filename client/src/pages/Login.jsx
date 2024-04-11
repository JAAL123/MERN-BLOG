import { useForm } from "react-hook-form";

export function Login() {
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
      <form action="" className="Login" onSubmit={onSubmit}>
        <h1>Iniciar Sesión</h1>
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
          type="password"
          placeholder="Contraseña"
          className="formInput"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <p className="formErrorMessage">Este campo es requerido</p>
        )}
        <button className="formButton">Iniciar Sesión</button>
      </form>
    </div>
  );
}
