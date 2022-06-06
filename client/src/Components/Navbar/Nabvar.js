import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import auth from "../../firebase";
import "./Navbar.css";
import { MdAttachEmail } from "react-icons/md";
import { FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const Nabvar = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const goLoginPage = () => {
    navigate("/login");
  };
  const goSignupPage = () => {
    navigate("/signup");
  };
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  return (
    <>
      <nav id="navitem" class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <Link to="/" class="navbar-brand p-0">
          <h1 class="m-0 text-primary fw-bolder">ToolsHub</h1>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav mx-auto py-4">
            <NavLink to="/" className="nav-item nav-link">
              Home
            </NavLink>
            {user && (
              <>
                <NavLink to="/dashboard" className="nav-item nav-link">
                  Dashboard
                </NavLink>
              </>
            )}
            <NavLink to="/blogs" className="nav-item nav-link">
              Blogs
            </NavLink>
            <NavLink to="/portfolio" className="nav-item nav-link">
              Portfolio
            </NavLink>

          </div>
          {user ? (
            <>
              <button onClick={logout} class="btn btn-primary py-2 px-4 ms-3">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button onClick={goLoginPage} class="btn btn-primary py-2 px-4 ms-3">
                Sign In
              </button>
              <button onClick={goSignupPage} class="btn btn-primary py-2 px-4 ms-3">
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nabvar;
