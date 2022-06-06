import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "react-rating";
import auth from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ProductDetails = () => {
  const [user, loading] = useAuthState(auth);
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserdata] = useState({});
  const arrivalDate = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  useEffect(() => {
    fetch(`https://peaceful-atoll-91971.herokuapp.com/readUserData?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserdata(data));
  }, [user]);

  const { isLoading: productLoading, data: product } = useQuery("productdata", () =>
    fetch(`https://peaceful-atoll-91971.herokuapp.com/readSingleToolsData/${id}`).then((res) => res.json())
  );
  const phone = useRef("");
  const quantity = useRef("");
  const address = useRef("");
  const message = useRef("");

  if (productLoading) {
    return <Spinner></Spinner>;
  }

  const handleQuantity = (e) => {
    if (parseInt(quantity.current.value) < product.min_quantity) {
      quantity.current.value = product.min_quantity;
      alert("You have to order at least " + product.min_quantity + " items");
    } else if (isNaN(quantity.current.value)) {
      quantity.current.value = product.min_quantity;
      alert("Quantity can not be string");
    } else if (parseInt(quantity.current.value) > product.quantity) {
      alert("Sorry We havent " + quantity.current.value + " items in our stock");
      quantity.current.value = product.min_quantity;
    }
  };

  const handleFormsubmit = (e) => {
    const token = localStorage.getItem("accessToken");
    const newOrder = {
      product_id: product._id,
      phone: phone.current.value,
      quantity: quantity.current.value,
      address: address.current.value,
      message: message.current.value,
      email: userData.email,
      name: userData.name,
    };
    e.preventDefault();
    fetch("https://peaceful-atoll-91971.herokuapp.com/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accesstoken: `${userData.email} ${token}`,
      },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        const { acknowledged, insertedId } = data;
        const { error } = data;

        if (acknowledged) {
          alert("Order Added Successfully");
        } else {
          alert("Unexpected Error Occured!! Please Fill Up form carefully");
        }
      });
  };

  return (
    <>
      <section class="section bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-md-8 mx-auto">
              <div class="product-details">
                <div className="text-center"><h1 class="my-4 product-title">{product.name}</h1></div>
                <div className="text-center">
                  <img className="img-fluid w-50" src={product.img} alt="" srcset="" />
                </div>
                <div class="content">
                  <div className="d-flex justify-content-center">
                    <div className="price bg-primary text-white px-5 py-2">
                      Price <br />${product.price}
                    </div>
                    <div className="price bg-primary text-white px-5 py-2 mx-2">
                      Min Quantity <br />
                      {product.min_quantity}
                    </div>
                    <div className="price bg-primary text-white px-5 py-2">
                      Available Quantity <br />
                      {product.quantity}
                    </div>
                  </div>
                  <div class="tab-content" id="pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <h3 class="tab-title">Product Description</h3>
                      <p>{product.des}</p>
                    </div>
                  </div>
                  <div></div>
                  <div class="tab-content" id="pills-tabContent">
                    <h3 class="tab-title">Ratings</h3>
                    <Rating
                      initialRating={product.ratings}
                      emptySymbol={<FontAwesomeIcon icon={faStar} />}
                      fullSymbol={<FontAwesomeIcon style={{ color: "#FFC600" }} icon={faStar} />}
                      readonly
                    ></Rating>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h1 class="mb-5">
              <span class="text-primary text-uppercase">Place Order</span>{" "}
            </h1>
          </div>

                <form onSubmit={handleFormsubmit}>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          readOnly
                          id="name"
                          placeholder={"Your Name"}
                          value={userData?.name}
                        />
                        <label for="name">Your Name</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="email"
                          readOnly
                          class="form-control"
                          id="email"
                          value={userData?.email}
                          placeholder="Your Email"
                        />
                        <label for="email">Your Email</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <input
                          ref={phone}
                          type="text"
                          class="form-control"
                          required
                          id="subject"
                          placeholder="Phone"
                        />
                        <label for="subject">Phone</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <input
                          ref={address}
                          type="text"
                          class="form-control"
                          id="subject"
                          placeholder="Address"
                        />
                        <label for="subject">Address</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <input
                          type="text"
                          ref={quantity}
                          onBlur={handleQuantity}
                          class="form-control"
                          id="subject"
                          placeholder="Quantity"
                        />
                        <label for="subject">Quantity</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <textarea
                          ref={message}
                          class="form-control"
                          placeholder="Leave a message here"
                          id="message"
                        ></textarea>
                        <label for="message">Message</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary w-100 py-3" type="submit">
                        Place order
                      </button>
                    </div>
                  </div>
                </form>

        </div>
      </div>
    </>
  );
};

export default ProductDetails;
