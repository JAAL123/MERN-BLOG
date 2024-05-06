import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePost } from "../context/PostContext";
import { createPostRequest } from "../api/post";
import { useNavigate } from "react-router-dom";

export function EditPost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm();

  const { id } = useParams();
  const { getPost } = usePost();
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      if (id) {
        const res = await getPost(id);
        setValue("title", res.title);
        setValue("summary", res.summary);
        setValue("content", res.content);
        setImage(res.image);
      }
    }
    fetchPost();
  }, []);

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("summary", values.summary);
    formData.append("content", values.content);
    formData.append("image", values.image[0]);
    console.log(values)
    // const res = await createPostRequest(formData);
    // if (res.status === 201) {
    //   navigate("/");
    //   reset();
    // }
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }else{
      setPreview(null);
    }
  };

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
        <div className="current-image">
        {preview ? (
          <img src={preview} alt="preview"/>
        ) : (
          <img src={`http://localhost:4000/uploads/${image}`} alt="preview" />        
        )}
        <input
          type="file"
          className="formInput"
          {...register("image")}
          id="image"
          accept=".jpg,.png,.jpeg"
          onChange={handleImageChange}
        />
        </div>
        {errors.image && <span>Este campo es requerido</span>}
        <Controller
          name="content"
          control={control}
          defaultValue=""
          render={({ field }) => <ReactQuill {...field} theme="snow" />}
        />

        <button className="formButton" style={{ marginTop: "10px" }}>
          Editar Post
        </button>
      </form>
    </>
  );
}
