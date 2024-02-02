import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      Error
      <button className="btn" onClick={() => navigate("/")}>
        Back
      </button>
    </>
  );
};

export default Error;
