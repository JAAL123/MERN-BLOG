import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Controller, useForm } from "react-hook-form";

export function CreatePost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    console.log(values);
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Titulo"
          className="formInput"
          {...register("title", { required: true })}
        />
        {errors.title && <span>Este campo es requerido</span>}
        <input
          type="text"
          name="summary"
          placeholder="Resumen"
          className="formInput"
          {...register("summary", { required: true })}
        />
        {errors.summary && <span>Este campo es requerido</span>}
        <input
          type="file"
          className="formInput"
          {...register("image", { required: true })}
          id="image"
          accept=".jpg,.png,.jpeg"
        />
        {errors.image && <span>Este campo es requerido</span>}
        <Controller
          name="content"
          control={control}
          defaultValue=""
          render={({ field }) => <ReactQuill {...field} theme="snow" />}
        />

        <button className="formButton" style={{ marginTop: "10px" }}>
          Crear Post
        </button>
      </form>
    </>
  );
}
