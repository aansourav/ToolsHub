import React from "react";
import { useNavigate } from "react-router-dom";
import "./Notfound.css";

const NotFound = () => {
  const navigate = useNavigate();
  const goHomepage = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <img
                className="img-fluid"
                src="https://media.istockphoto.com/photos/error-page-not-found-picture-id1153372686?b=1&k=20&m=1153372686&s=170667a&w=0&h=4veHHEjI5rq2qpYWMXcHSzXfrp22SMwa79DsqqiYfAw="
                alt=""
              />

              <div className="error-actions">
                <button onClick={goHomepage} className=" btn btn-primary">
                  Take Me Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
