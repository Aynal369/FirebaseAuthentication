import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import signUp from "../../images/register.jpg";
import useAuth from "../../hook/useAuth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { createNewUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const onSubmit = (data) => {
    const userName = data.userName;
    const email = data.email;
    const password = data.password;
    createNewUser(userName, email, password, navigate);
  };
  return (
    <main>
      <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
        <div className="container card rounded-5 border-0 shadow p-3 m-3">
          <div className="row justify-content-center">
            <div className="col-lg-6 p-0 align-self-center">
              <div className="text-center mb-4">
                <Link to="/">
                  <img
                    src={signUp}
                    alt="host ambit"
                    width={300}
                    className="img-fluid"
                  />
                </Link>
              </div>
              <div className="text-center px-2 px-md-5">
                <h2>Hello Friends!</h2>
                <p className="fw-semibold text-muted">
                  Enter your details and start a journey with us.
                </p>
              </div>
            </div>
            <div className="col-lg-6 p-3 p-md-0">
              <div className="card border-0 py-5">
                <h3 className="text-center mb-4">Create Account</h3>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="row g-4 justify-content-center px-2 px-md-5"
                >
                  <div className="col-sm-10">
                    {errors.userName && (
                      <span className="ms-3 text-danger">
                        <small>{errors.userName.message}</small>
                      </span>
                    )}
                    <input
                      type="text"
                      id="userName"
                      name="userName"
                      placeholder="Enter your display name"
                      className="form-control rounded-5"
                      {...register("userName", {
                        required: "This field is required",
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message: "Allow only alphabets no space",
                        },
                        minLength: {
                          value: 4,
                          message: "Min length 4 characters",
                        },
                      })}
                    />
                  </div>
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
                    {errors.password && (
                      <span className="ms-3 text-danger">
                        <small>{errors.password.message}</small>
                      </span>
                    )}
                    <div className="input-group">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Enter strong password"
                        className="form-control rounded-5 rounded-end"
                        {...register("password", {
                          required: "This field is required",
                          minLength: {
                            value: 8,
                            message: "Min length is 8 characters",
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
                  </div>
                  <div className="col-sm-10">
                    {errors.confirm_password && (
                      <span className="ms-3 text-danger">
                        <small>{errors.confirm_password.message}</small>
                      </span>
                    )}
                    <div className="input-group">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirm_password"
                        name="confirm_password"
                        placeholder="Enter confirm password"
                        className="form-control rounded-5 rounded-end"
                        {...register("confirm_password", {
                          required: "This field is required",
                          validate: (value) =>
                            value === getValues("password") ||
                            "Password do not match.",
                        })}
                      />
                      <button
                        className="btn border text-muted rounded-5 rounded-start"
                        type="button"
                        id="confirm_password"
                        onClick={() =>
                          setShowConfirmPassword((prevState) => !prevState)
                        }
                      >
                        {!showConfirmPassword ? (
                          <BsEyeFill />
                        ) : (
                          <BsEyeSlashFill />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="btn btn-danger rounded-5 px-5"
                    >
                      Submit
                    </button>
                  </div>
                </form>
                <div className="text-center mt-4">
                  <p>
                    <span className="text-muted me-2">
                      Already have an account?
                    </span>
                    <button
                      type="button"
                      className="btn btn-light rounded-5 px-5"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
