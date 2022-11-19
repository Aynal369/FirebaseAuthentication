import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import loginPic from "../../images/login.jpg";
import useAuth from "../../hook/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { userLogin, signInWithGoogle } = useAuth();
  /* const handleConnectGoogle = () => {
    signInWithGoogle(navigate);
  }; */
  const location = useLocation();
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    userLogin(email, password, navigate, location);
  };
  return (
    <main>
      <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
        <div className="container card rounded-5 border-0 shadow p-3 m-3">
          <div className="row justify-content-center">
            <div className="col-lg-6 p-3 p-md-0 order-1 order-lg-0">
              <div className="card border-0 py-5">
                <h3 className="text-center mb-4">Login</h3>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="row g-4 justify-content-center px-2 px-md-5"
                >
                  <div className="col-sm-10">
                    {errors.email && (
                      <span className="ms-3 text-danger">
                        <small> {errors.email.message}</small>
                      </span>
                    )}
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                      className="form-control rounded-5"
                      {...register("email", {
                        required: "This field is required",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Entered value does not match email format",
                        },
                      })}
                    />
                  </div>
                  <div className="col-sm-10">
                    <div className="input-group">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="password"
                        className="form-control rounded-5 rounded-end"
                        {...register("password", {
                          required: "this field is required",
                          minLength: {
                            value: 8,
                            message: "min length is 8",
                          },
                        })}
                      />
                      <button
                        className="btn border text-muted rounded-5 rounded-start"
                        type="button"
                        id="password"
                        onClick={() =>
                          setShowPassword((prevState) => !prevState)
                        }
                      >
                        {!showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                      </button>
                    </div>
                    {errors.password && (
                      <span
                        style={{ color: "red", fontSize: "12px" }}
                        role="alert"
                      >
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                  <div className="d-flex justify-content-around">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="dropdownCheck"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="dropdownCheck"
                      >
                        <small>Remember me</small>
                      </label>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-light text-primary btn-sm rounded-5"
                        onClick={() => navigate("/forget-password")}
                      >
                        forget password
                      </button>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary rounded-5 px-5"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div className="text-center mt-3">
                  <p>
                    <span className="text-muted me-2">
                      Don't have an account?
                    </span>
                    <button
                      type="button"
                      className="btn btn-light rounded-5 px-5"
                      onClick={() => navigate("/register")}
                    >
                      Register
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-0 align-self-center">
              <div className="text-center mb-4">
                <Link to="/">
                  <img src={loginPic} alt="host ambit" width={300} />
                </Link>
              </div>
              <div className="text-center px-2 px-md-5">
                <h2>Welcome Back!</h2>
                <p className="fw-semibold text-muted">
                  To keep connected with us please login.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
