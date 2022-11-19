import React from "react";
import { useNavigate } from "react-router-dom";
import not from "../../images/404.jpg";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="min-vh-100">
        <div className="position-absolute top-50 start-50 translate-middle">
          <div>
            <img src={not} alt="not found" className="img-fluid" />
          </div>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate("/")}
            >
              Back to home
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
