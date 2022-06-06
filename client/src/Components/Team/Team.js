import React from "react";
import "./Team.css";
import team1 from "../../Components/images/team1.jpg";
import team2 from "../../Components/images/team2.jpg";
import team3 from "../../Components/images/team3.jpg";
import team4 from "../../Components/images/team4.jpg";
const Team = () => {
  return (
    <section class="py-5">
      <div class="section about">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12">
              <h2 class="section-heading">OUR TEAM MEMBERS</h2>
            </div>

            <div class="col-sm-6 col-md-6">
              <div class="box-team">
                <div class="box-image">
                  <div class="sosmed d-flex justify-content-evenly">
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-skype"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                  <img src={team1} alt="" />
                </div>
                <div class="body-content">
                  <div class="people">Rome Doel</div>
                  <div class="position">Founder & CEO, ToolsHub</div>
                  <div class="excert">
                    There’s no need to be overly formal on your online portfolio website page. Keep the page
                    name simple.
                  </div>
                  <div class="phone">
                    <span class="fa fa-phone"></span> 654-123987
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-md-6">
              <div class="box-team">
                <div class="box-image">
                  <div class="sosmed d-flex justify-content-evenly">
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-skype"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                  <img src={team2} alt="" />
                </div>
                <div class="body-content">
                  <div class="people">David Vila</div>
                  <div class="position">Manager, ToolsHub</div>
                  <div class="excert">
                    Tell readers who you are in the first line of your portfolio introduction. Before
                    introducing yourself.
                  </div>
                  <div class="phone">
                    <span class="fa fa-phone"></span> 654-123987
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-md-6">
              <div class="box-team">
                <div class="box-image">
                  <div class="sosmed d-flex justify-content-evenly">
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-skype"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                  <img src={team3} alt="" />
                </div>
                <div class="body-content">
                  <div class="people">Konan Doel</div>
                  <div class="position">Technical Head, Refineries</div>
                  <div class="excert">
                    Even if you’ve hit the perfect balance of writing just enough about your professional
                    experience.
                  </div>
                  <div class="phone">
                    <span class="fa fa-phone"></span> 654-123987
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-md-6">
              <div class="box-team">
                <div class="box-image">
                  <div class="sosmed d-flex justify-content-evenly">
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-skype"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                  <img src={team4} alt="" />
                </div>
                <div class="body-content">
                  <div class="people">Archar Max</div>
                  <div class="position">CTO, ToolsHub</div>
                  <div class="excert">
                    We’ve put together a simple step-by-step guide to teaching you how to create a biography
                    that works.
                  </div>
                  <div class="phone">
                    <span class="fa fa-phone"></span> 654-123987
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
