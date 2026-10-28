// IMPORTS ICONS
import { BsSpotify } from "react-icons/bs";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import { useState } from "react";

const Login = () => {
  // VIEW PASSWORD FUNCION AND USESTATE
  const [viewPassword, setViewPassword] = useState(false);
  const turnViewPass = () => {
    setViewPassword(!viewPassword);
  };
  return (
    // FULL SCREEN
    <div className="bg-zinc-900 w-dvw h-dvh flex flex-col justify-center items-center text-amber-50">
      {/* Container forms body */}
      <div className="flex flex-1 flex-col justify-center gap-10">
        {/* Header form */}
        <div className="flex flex-col items-center justify-center gap-5">
          <BsSpotify className="animate-bounce" color="red" size={120} />
          <h1 className="text-6xl font-bold">Welcome back</h1>
        </div>
        {/* Body form */}
        <div className="flex flex-col gap-3">
          <label className="font-bold" htmlFor="email-input">
            Email
          </label>
          <input
            id="email-input"
            className="border border-white outline-none focus-visible:border-2 py-3 px-2 mb-2 invalid:border-red-600"
            type="email"
          />
          <div className="flex flex-col gap-3 relative">
            <label className="font-bold" htmlFor="password-input">
              Senha
            </label>
            <input
              id="password-input"
              className="border border-white outline-none focus-visible:border-2 py-3 px-2 mb-2 invalid:border-red-600"
              type={viewPassword ? "text" : "password"}
            />
            <button
              onClick={turnViewPass}
              className="absolute right-3 bottom-5"
            >
              {viewPassword ? (
                <Eye color="#e01b24" strokeWidth={1.5} />
              ) : (
                <EyeOff color="#e01b24" strokeWidth={1.5} />
              )}
            </button>
          </div>
          <button type="button" className="font-bold cursor-pointer bg-red-600 py-3 rounded-full text-2xl shadow-xl/30 hover:bg-red-700 transition-colors">
            Continue
          </button>
        </div>
        {/* dont have account */}
        <div className="flex flex-col gap-4 justify-center items-center">
          <span className="text-zinc-400/60 font-bold">
            Don't have an account?
          </span>
          <button className="font-bold text-white cursor-pointer hover:text-zinc-400 transition-colors">
            Sing up
          </button>
        </div>
      </div>

      <footer className="flex flex-col justify-center items-center pb-6 text-zinc-400">
        <p>
          Este site foi desenvolvido por Dôglas Gabriell dos Santos Macedo,
          afins <span>acadêmicos</span>
        </p>
        <p>&copy; Todos direitos reservados a dgfy</p>
      </footer>
    </div>
  );
};

export default Login;
