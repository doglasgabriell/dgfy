import { toast, Bounce } from "react-toastify";

const ToastSucess = (texto) => {
  toast.success(texto, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    transition: Bounce,
  });
};

export default ToastSucess;
