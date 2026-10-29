// IMPORTS ICONS
import { BsSpotify } from "react-icons/bs";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// imports videos
import IchigoGetsuga from "../assets/videos/getsuga.gif";

const Login = () => {
  // VIEW PASSWORD FUNCION AND USESTATE
  const [viewPassword, setViewPassword] = useState(false);
  const turnViewPass = () => {
    setViewPassword(!viewPassword);
  };
  return (
    <>
      {/* BG FULL SCREEN */}
      <div
        className="bg-black w-full h-full absolute inset-0 bg-cover"
        style={{ backgroundImage: `url(${IchigoGetsuga})` }}
      ></div>
      <div className="w-dvw h-dvh flex flex-col justify-center items-center text-amber-50 z-10 backdrop-blur-md bg-black/50">
        {/* Container forms body */}
        <div className="flex flex-1 flex-col justify-center gap-10">
          {/* Header form */}
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="relative">
              <BsSpotify
                className="bg-black shadow-xl z-2 rounded-full"
                color="red"
                size={120}
              />
              <BsSpotify
                className="absolute inset-0 blur-xl z-[-1] bg-black/50 shadow-xl rounded-full"
                color="red"
                size={120}
              />
            </div>
            <h1 className="text-6xl font-bold animate-pulse">
              Welcome Back
            </h1>
          </div>
          {/* Body form */}
          <div className="flex flex-col gap-3 w-2xl">
            <label className="font-bold" htmlFor="email-input">
              Email
            </label>
            <input
              id="email-input"
              className="border border-white outline-none focus-visible:border-2 py-3 px-2 mb-2 invalid:border-red-600 rounded-full bg-black/50"
              type="email"
              placeholder="example@gmail.com"
            />
            <div className="flex flex-col gap-3 relative">
              <label className="font-bold" htmlFor="password-input">
                Senha
              </label>
              <input
                id="password-input"
                className="border border-white outline-none focus-visible:border-2 py-3 px-2 mb-2 invalid:border-red-600 bg-black/50 rounded-full"
                type={viewPassword ? "text" : "password"}
                placeholder="min length 8 character"
              />
              <button
                onClick={turnViewPass}
                className="absolute right-3 bottom-5"
                type="submit"
              >
                {viewPassword ? (
                  <Eye color="#e01b24" strokeWidth={1.5} />
                ) : (
                  <EyeOff color="#e01b24" strokeWidth={1.5} />
                )}
              </button>
            </div>
            <button
              type="button"
              className="font-bold cursor-pointer bg-red-600 py-3 rounded-full text-2xl shadow-xl/30 hover:bg-red-700 transition-colors"
            >
              Continue
            </button>
          </div>
          {/* dont have account */}
          <div className="flex flex-col gap-4 justify-center items-center">
            <span className="text-zinc-400/60 font-bold">
              Don't have an account?
            </span>
            <Link to="/register">
              <button className="font-bold text-white cursor-pointer hover:text-zinc-400 transition-colors">
                Sing up
              </button>
            </Link>
          </div>
        </div>

        <footer className="flex flex-col justify-center items-center pb-6 text-zinc-400">
          <p>This webiste was created by Dôglas for Academic purposes</p>
          <p>&copy; All rights reserved to dgfy</p>
        </footer>
      </div>
    </>
  );
};

export default Login;
