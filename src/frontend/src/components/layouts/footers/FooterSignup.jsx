const FooterSignup = () => {
  return (
    <footer className="flex bg-linear-to-l to-red-800 from-blue-800 h-18 w-full sticky items-center justify-around px-4">
      <div className="flex flex-col items-start w-1/2">
        <p className="text-zinc-200 font-bold">Pré visualização do dgfy</p>
        <p className="text-zinc-200/98">
          Inscreva-se gratuitamente para ter acesso ao dgfy completo, sem
          pagamentos! Totalmente gratuito
        </p>
      </div>

      <div className="w-1/2  flex justify-end">
        <button className="bg-zinc-100 p-2 px-8 rounded-full font-bold hover:bg-zinc-300 hover:scale-105 transition-all cursor-pointer">
          Inscreva-se grátis
        </button>
      </div>
    </footer>
  );
};

export default FooterSignup;
