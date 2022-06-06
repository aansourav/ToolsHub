import React from "react";
import "./MyPortfolio.css";
import imgage from "../images/sourav.png";
const MyPortfolio = () => {
  return (
    <>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <p class="d-inline-block fs-1 text-primary  ">Abdullah An-Noor</p>
              <h4 class=" mb-4">aansourav@gmail.com</h4>
              <section>
                To work as a Software Engineer applying my knowledge in the field of requirements
                specification, designing, testing maintenance to cater to the specific needs of the people. I
                wish to work in a team of motivated individuals who wish to work towards the advancement of
                the company and its goals.
              </section>

              <div class="row g-4">
                <div class="col-md-6">
                  <h3 class="mt-5 mb-3">My Educational Background</h3>
                  <section class="mb-0">Computer Science and Engineering</section>
                  <section class="mb-0">Khulna University</section>
                </div>
                <div class="col-md-6">
                  <h3 class="mt-5 text- mb-3">My Skills As a Web Developer</h3>
                  <section class="mb-0">
                    HTML, CSS, JavaScript, Bootstrap, TailWindCSS, ReactJS, NodeJS, MongoDB, TypeScript
                  </section>
                </div>
                <div class="col-md-6">
                  <h3 class=" mb-3">Project 1</h3>
                  <section class="mb-0">
                    <a href="https://toolshub-4c24c.web.app">Tools Hub</a>
                  </section>
                </div>
                <div class="col-md-6">
                  <h3 class=" mb-3">Project 2</h3>
                  <section class="mb-0">
                    <a href="https://gadget-hub-4c849.web.app">Gadget Hub</a>
                  </section>
                </div>
                <div class="col-md-6">
                  <h3 class=" mb-3">Project 3</h3>
                  <section class="mb-0">
                    <a href="https://aansourav-assignment-10.netlify.app/">F I T M E</a>
                  </section>
                </div>
              </div>
            </div>

            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div class="d-flex flex-column">
                <img class="img-fluid w-75 align-self-end" src={imgage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPortfolio;
