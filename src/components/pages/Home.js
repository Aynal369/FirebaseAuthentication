import React from "react";
import useAuth from "../../hook/useAuth";
import DefaultProfile from "../sections/DefaultProfile";

import UserProfile from "../sections/UserProfile";

const Home = () => {
  const { users } = useAuth();

  return (
    <div className="container">
      <div className="row justify-content-center py-5">
        <div className="col-md-6">
          {users?.email ? <UserProfile /> : <DefaultProfile />}
        </div>
      </div>
    </div>
  );
};

export default Home;
