import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase";
import GoogleButton from "react-google-button";
import Spinner from "../Spinner/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cpass, setConfirmPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  // const [error, setError] = useState('');
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, hookuser, hookloading, hookerror] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, googleUser, googleloading, googleerror] = useSignInWithGoogle(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      console.log();
      fetch("https://peaceful-atoll-91971.herokuapp.com/login", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user?.email, name: user.displayName || name }),
      })
        .then((res) => res.json())
        .then((data) => {
          const { token } = data;
          if (token) {
            localStorage.setItem("accessToken", token);
            navigate(from, { replace: true });
          }
        });
    }
  }, [user]);

  if (hookloading || googleloading) {
    return <Spinner></Spinner>;
  }

  const handleUserMail = (e) => {
    setMail(e.target.value);
  };
  const handleUserName = (e) => {
    setName(e.target.value);
  };
  const handleUserPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleUserConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleFormsubmit = (e) => {
    e.preventDefault();
    // console.log(mail, password);
    if (password === cpass) {
      createUserWithEmailAndPassword(mail, password);
    } else {
      toast("Passwords didn't match!");
    }
  };

  const handleGoogleButton = () => {
    signInWithGoogle();
  };

  return (
    <>
      <div class="container-fluid bg-white bg-appointment my-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div class="row gx-5">
            <div class="col-lg-6 py-5">
              <div class="py-5">
                <h1 class="display-5 text-black mb-4">
                Join With Us Now & Enjoy Thousand of Products With Best Prices
                </h1>
                
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn"
                data-wow-delay="0.6s"
              >
                <h1 class="text-black mb-4">Sign Up</h1>
                <form onSubmit={handleFormsubmit}>
                  <div class="row g-3">
                    <div class="col-12 col-sm-6">
                      <input
                        type="text"
                        class="form-control bg-light border-2"
                        placeholder="Your Name"
                        required
                        onBlur={handleUserName}
                      />
                    </div>
                    <div class="col-12 col-sm-6">
                      <input
                        type="email"
                        class="form-control bg-light border-2"
                        placeholder="Your Email"
                        required
                        onBlur={handleUserMail}
                      />
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="" id="">
                        <input
                          type="password"
                          class="form-control bg-light border-2 datetimepicker-input"
                          placeholder="Your Password"
                          required
                          onBlur={handleUserPassword}
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="" id="">
                        <input
                          type="password"
                          class="form-control bg-light border-2 datetimepicker-input"
                          placeholder="Confirm Password"
                          required
                          onBlur={handleUserConfirmPassword}
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-dark w-100 py-3" type="submit">
                        SignUp
                      </button>
                    </div>
                    <div className="col-12">
                      <section className="text-black">
                        Already have an account?
                        <strong>
                          {" "}
                          <Link to="/login">Login here</Link>
                        </strong>{" "}
                      </section>
                      {hookerror || googleerror ? (
                        <>
                          <div className="text-center my-2">
                            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                              ></button>
                              <strong>
                                {hookerror?.message}
                                {googleerror?.message}
                              </strong>
                            </div>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="col-12">
                      <div class="row text-black">
                        <div class="col">
                          <hr />
                        </div>
                        <div class="col-auto">OR</div>
                        <div class="col">
                          <hr />
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <GoogleButton onClick={handleGoogleButton} className="mx-auto" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
