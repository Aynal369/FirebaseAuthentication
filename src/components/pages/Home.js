import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import avatar from "../../images/user.png";
import { RiCheckFill, RiGoogleFill } from "react-icons/ri";

const Home = () => {
  const { users, handleEmailVerification, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleGoogleAuth = () => {
    signInWithGoogle(navigate, location);
  };
  console.log(users);
  return (
    <div className="container">
      <div className="row justify-content-center py-5">
        <div className="col-md-6">
          {users.email ? (
            <div className="card bg-light border-0 text-center p-3 p-sm-5 shadow rounded-5">
              <div className="">
                <img
                  src={users.photoURL}
                  alt="avatar"
                  className="img-fluid rounded-circle"
                  width={180}
                />
              </div>
              <div>
                <div>
                  <h3>{users.displayName}</h3>
                  <p>{users.email}</p>
                </div>
                <div>
                  {users.emailVerified ? (
                    <button
                      type="button"
                      className="btn btn-success rounded-5 px-4"
                    >
                      <span>
                        <RiCheckFill />
                      </span>{" "}
                      Email Verified
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-outline-danger rounded-5 px-4"
                      onClick={handleEmailVerification}
                    >
                      Unverified Email
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="card bg-light border-0 text-center p-3 p-sm-5 shadow rounded-5">
              <div className="">
                <img
                  src={avatar}
                  alt="avatar"
                  className="img-fluid"
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
