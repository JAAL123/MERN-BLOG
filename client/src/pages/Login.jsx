import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { singin, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    } else {
      return navigate("/login");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    singin(values);
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
          {...register("userName", { required: true })}
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
