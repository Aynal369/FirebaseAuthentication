import React from "react";
import useAuth from "../../hook/useAuth";
import { RiCheckFill } from "react-icons/ri";

const UserProfile = () => {
  const { users, handleEmailVerification } = useAuth();
  return (
    <div className="card bg-light border-0 text-center p-3 p-sm-5 shadow rounded-5">
      <div className="text-center">
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
            <button type="button" className="btn btn-success rounded-5 px-4">
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
  );
};

export default UserProfile;
