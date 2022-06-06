import React from "react";
import { FcServices } from "react-icons/fc";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiOutlineFlag } from "react-icons/ai";

const BussinessSummary = () => {
  return (
    <>
      <div class="my-5 py-5">
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-12">
              <div class="section-title">
                <h2>Our Bussiness Summary</h2>
              </div>
            </div>
          </div>
          <div class="row g-5 align-items-center m-0">
            <div class="col-lg-6">
              <h1 class="mb-4">
                Welcome to <span class="text-primary text-uppercase">Tools Hub</span>
              </h1>
              <section class="mb-4">
                Hand Tools. Get the best collection of Hand Tools & Hardware Fittings in the Bangladesh at
                fixit.com.bd. We have been selling Hand Tools for the past 40 years. We know what is good &
                what is not. Let us help you select the right tool for what you want to do! We have Pliers,
                Hammers, Wrenches, Socket sets, Tie Dye sets, tool boxes, calipers, measuring tapes & much
                more!
              </section>
              <div class="row g-3 pb-4">
                <div class="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                  <div class="border rounded p-1">
                    <div class="border rounded text-center p-4">
                      <FcServices className="fa-2x text-primary mb-2"></FcServices>
                      <h2 class="mb-1 " data-toggle="counter-up">
                        10+
                      </h2>
                      <section class="mb-0">Services</section>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                  <div class="border rounded p-1">
                    <div class="border rounded text-center p-4">
                      <AiOutlineUsergroupAdd className="fa-2x text-primary mb-2"></AiOutlineUsergroupAdd>
                      <h2 class="mb-1" data-toggle="counter-up">
                        100k+
                      </h2>
                      <section class="mb-0">Customers</section>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                  <div class="border rounded p-1">
                    <div class="border rounded text-center p-4">
                      <AiOutlineFlag className="fa-2x text-primary mb-2"></AiOutlineFlag>
                      <h2 class="mb-1" data-toggle="counter-up">
                        15+
                      </h2>
                      <section class="mb-0">Countries</section>
                    </div>
                  </div>
                </div>
              </div>
              <button class="btn btn-primary py-3 px-5 mt-2">Explore More</button>
            </div>
            <div class="col-lg-6">
              <div class="row g-3">
                <div class="col-6 text-end">
                  <img
                    class="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.1s"
                    alt=""
                    src="https://www.calfast.com/img/cms/MWT_SWAS/Milwaukee-Power-Tools_SQ-SWAS001.jpg"
                    style={{
                      marginTop: "25%",
                    }}
                  />
                </div>
                <div class="col-6 text-start">
                  <img
                    class="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.3s"
                    alt=""
                    src="https://i2.wp.com/www.promakertools.com/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-11-at-1.59.49-PM-2.jpeg?resize=1024%2C768&ssl=1"
                  />
                </div>
                <div class="col-6 text-end">
                  <img
                    class="img-fluid rounded w-50 wow zoomIn"
                    data-wow-delay="0.5s"
                    alt=""
                    src="https://www.almanacnews.com/news/photos/2022/march/28/59305_col.jpg"
                  />
                </div>
                <div class="col-6 text-start">
                  <img
                    class="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.7s"
                    alt=""
                    src="https://img.freepik.com/free-vector/construction-tools-shop-service-banner-template_38901-502.jpg?w=2000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BussinessSummary;
