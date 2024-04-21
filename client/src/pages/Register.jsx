import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { signup, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    if (values.password !== values.confirmPassword) {
      return alert("Las contraseñas no coinciden");
    }
    await signup(values);
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
          {...register("userName", { required: true })}
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
