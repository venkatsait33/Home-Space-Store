import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-2 bg-orange-400">
      <h1 className="text-2xl font-bold text-black place-items-center">
        {error.data || `Something went wrong`}
      </h1>
      <h1 className="text-xl font-bold text-black place-items-center">
        {error.statusText || `Something went wrong`}
      </h1>
      <h1 className="text-3xl font-bold text-black place-items-center">
        {error.status || `Something went wrong`}
      </h1>
      <button  className="btn btn-primary" type="button" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default Error;
