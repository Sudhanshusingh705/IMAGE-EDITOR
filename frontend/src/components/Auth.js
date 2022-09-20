import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const Authorize = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  console.log(currentUser);

  if (currentUser === null) {
    Swal.fire({
      icon: "error",
      title: "Ooops!!",
      text: "You Need To Login ",
    });
    return <Navigate to="/login" />;
  }

  return children;
};

export default Authorize;
