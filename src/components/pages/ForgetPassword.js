import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const ForgetPassword = () => {
  const { handlePasswordResetEmail } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    handlePasswordResetEmail(email, navigate, location);
  };
  return (
    <main>
      <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
        <div className="container card rounded-5 border-0 shadow p-3 m-3">
          <div className="row justify-content-center">
            <div className="col-lg-6 p-3 p-md-0 order-1 order-lg-0">
              <div className="card border-0 py-5">
                <div className="text-center">
                  <h3 className="mb-4">Reset your password</h3>
                  <p className="text-muted m-0">
                    <strong>Lost your password?</strong> Please enter your
                    register email address.
                  </p>
                  <p className="text-muted">
                    You will receive a link to create a new password via email.
                  </p>
                </div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="row g-4 justify-content-center px-2 px-md-5 mt-4"
                >
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control rounded-5"
                      id="email"
                      {...register("email")}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary rounded-5 px-5"
                    >
                      Send Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgetPassword;
