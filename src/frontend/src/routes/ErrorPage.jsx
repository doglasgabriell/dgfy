import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <h1>Ops!</h1>
      <p>Ocorreu um erro de rota...</p>
      <p>{error.statusText}</p>
    </div>
  );
};

export default ErrorPage;
