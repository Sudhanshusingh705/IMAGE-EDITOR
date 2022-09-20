import React from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate();
  const userSubmit = async (formdata,{resetForm}) => {
    console.log(formdata);

    const response = await fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.status);

    if (response.status === 200) {
      console.log("user data added!");
      Swal.fire({
        icon: "success",
        title: "Well Done",
        text: "Registered Successfully",
        
      });
      const data = await response.json();
       sessionStorage.setItem("user", JSON.stringify(data));
       navigate("/imageEditor");
    }

    console.log("request sent");
  };
  return (
    <>
      
      <section className="">
        <div
          className="p-5 bg-image"
          style={{
            backgroundImage: `
                url("https://mdbootstrap.com/img/new/textures/full/171.jpg")`,
            height: 300,
          }}
        />
        <div
          className="card mx-4 mx-md-5 shadow-5-strong "
          style={{
            marginTop: "-100px",
            background: "hsla(0, 0%, 100%, 0.8)",
            backdropFilter: "blur(30px)",
          }}
        >
          <div className="card-body py-5 px-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-4 ">
                <h2 className="fw-bold mb-5">Login Here</h2>
                <Formik
                  initialValues={{email: "", password: "" }}
                  onSubmit={userSubmit}
                >
                  {({ values, handleSubmit, handleChange }) => (
                    <form onSubmit={handleSubmit}>
                      {/* Email input */}
                      <div className="mb-4">
                      <label className="form-label" htmlFor="form3Example3">
                        Email address
                      </label>
                        <input
                          type="email"
                          id="email"
                          value={values.email}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                      {/* Password input */}
                      <div className="mb-4">
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                        <input
                          type="password"
                          id="password"
                          value={values.password}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4"
                      >
                        Login
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
