import React from "react";
import avatar from "../../images/user.png";
import { RiGoogleFill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const DefaultProfile = () => {
  const { signInWithGoogle } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const handleGoogleAuth = () => {
    signInWithGoogle(navigate, location);
  };
  return (
    <div className="card bg-light border-0 text-center p-3 p-sm-5 shadow rounded-5">
      <div className="text-center">
        <img
          src={avatar}
          alt="avatar"
          className="img-fluid rounded-circle"
          width={180}
        />
      </div>
      <div>
        <div className="py-4">
          <button
            type="button"
            className="btn btn-danger rounded-5 px-4 me-5"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
          <button
            type="button"
            className="btn btn-primary rounded-5 px-4"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
        <div className="">
          <button
            type="button"
            className="btn btn-outline-danger rounded-5 px-4"
            onClick={handleGoogleAuth}
          >
            <span>
              <RiGoogleFill />
            </span>{" "}
            Connect with social media
          </button>
        </div>
      </div>
    </div>
  );
};

export default DefaultProfile;
