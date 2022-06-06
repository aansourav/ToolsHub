import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-5">
              <div class="position-relative h-100">
                <img
                  class="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src="https://media.istockphoto.com/photos/house-made-up-of-measuring-tapes-and-tools-picture-id949187600?k=20&m=949187600&s=612x612&w=0&h=5DtrIarC3TPjlL-LolsNP7bo3BhIRDa6sHCWGmtS_FM="
                  alt=""
                />
              </div>
            </div>

            <div class="col-lg-7">
              <div class="section-title mb-4">
                <h5 class="position-relative d-inline-block text-primary text-uppercase">Who We Are</h5>
                <h1 class="display-5 mb-0">The Leading & Most Trustable Tools Supplier of The Continent</h1>
              </div>
              <h4 class="text-body fst-italic mb-4">
                To deliver precision and top quality products through ensuring safety and durability
              </h4>
              <p class="aboutUsText mb-4">
                Hand Tools. Get the best collection of Hand Tools & Hardware Fittings in the Bangladesh. We
                have been selling Hand Tools for the past 40 years. We know what is good & what is not. Let us
                help you select the right tool for what you want to do! We have Pliers, Hammers, Wrenches,
                Socket sets, Tie Dye sets, tool boxes, calipers, measuring tapes & much more!
              </p>
              <div class="row g-3">
                <div class="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                  <h5 class="mb-3">
                    <AiFillCheckCircle className="text-primary me-3"></AiFillCheckCircle>
                    Award Winning
                  </h5>
                  <h5 class="mb-3">
                    <AiFillCheckCircle className="text-primary me-3"></AiFillCheckCircle>
                    Professional Staff
                  </h5>
                </div>
                <div class="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                  <h5 class="mb-3">
                    <AiFillCheckCircle className="text-primary me-3"></AiFillCheckCircle>
                    24/7 Opened
                  </h5>
                  <h5 class="mb-3">
                    <AiFillCheckCircle className="text-primary me-3"></AiFillCheckCircle>
                    Fair Prices
                  </h5>
                </div>
              </div>
              <a
                href="appointment.html"
                class="btn btn-primary py-3 px-5 mt-4 wow zoomIn"
                data-wow-delay="0.6s"
              >
                Make An Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
