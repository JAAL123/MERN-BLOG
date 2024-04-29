import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Controller, useForm } from "react-hook-form";
import { createPostRequest } from "../api/post";
import { useNavigate } from "react-router-dom";

export function CreatePost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("summary", values.summary);
    formData.append("content", values.content);
    formData.append("image", values.image[0]);

    const res = await createPostRequest(formData);

    if (res.status === 201) {
      navigate("/");
      reset();
    }
  });

  return (
    <>
      <form onSubmit={onSubmit} encType="multipart/form-data">
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
