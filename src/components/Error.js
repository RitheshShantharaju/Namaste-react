import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error">
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      {err.status}:{err.statusText}
    </div>
  );
};

export default Error;
