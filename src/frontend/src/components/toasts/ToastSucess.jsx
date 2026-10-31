import { toast, Bounce } from "react-toastify";

const ToastSucess = (texto) => {
  const success = () =>
    toast.success(texto, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  return success;
};

export default ToastSucess;
