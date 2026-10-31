import { toast, Bounce } from "react-toastify";

const ToastSucess = ({ TextoToast, contextButton, className }) => {
  function sucess() {
    toast.success(TextoToast, {
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
  }

  return (
    <button type="button" onClick={sucess} className={className}>
      {contextButton}
    </button>
  );
};

export default ToastSucess;
