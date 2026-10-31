import { toast, Bounce } from "react-toastify";

const ToastInfo = (content) => {
  return toast.info(content, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
};

export default ToastInfo;
