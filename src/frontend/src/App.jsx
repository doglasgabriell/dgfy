import { useState } from "react";
import FooterSignup from "./components/layouts/footers/FooterSignup";
import SignUpHeader from "./components/layouts/signup/SignUpHeader";
import SingUpAside from "./components/layouts/signup/SingUpAside";
import Cardsignup from "./components/cards/Cardsignup";
import { Outlet } from "react-router-dom";

function App() {
  // Use state + funcao para setar o card de se inscrever
  const [cardsign, setCardsign] = useState(false);
  function showCardSign() {
    setCardsign(!cardsign);
  }

  return (
    <div className="relative">
      {/* Adicioa o card na tela se o user clicar em um botão antes de se fzr o "login" */}
      {cardsign && <Cardsignup hiddenCard={showCardSign} />}
      <div className="h-screen flex flex-col bg-zinc-950">
        <SignUpHeader />
        <div className="flex flex-1 gap-2 p-2 overflow-hidden">
          <SingUpAside cardBtn={showCardSign} />
          <main className="flex flex-1 flex-col p-10  overflow-y-auto bg-linear-to-b from-zinc-800 to-zinc-950 rounded-lg relative">
            <Outlet context={{ showCardSign }} />
          </main>
        </div>
        <FooterSignup />
      </div>
    </div>
  );
}

export default App;
