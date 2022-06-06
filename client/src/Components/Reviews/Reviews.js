import React, { useEffect, useState } from "react";
import "./Reviews.css";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import ReviewItem from "./ReviewItem";
import { AiOutlineLaptop } from "react-icons/ai";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-atoll-91971.herokuapp.com/readreviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <>
      {/* <div className="container my-5"> */}
      <div class="section-title text-center">
        <h2 className="line mt-4"> Reviews From Our Customers</h2>
        
      </div>
      <div class="review-cards row row-cols-1 row-cols-md-3 g-4 my-5">
        {reviews.map((review) => {
          return <ReviewItem key={review._id} review={review}></ReviewItem>;
        })}
      </div>
    </>
  );
};

export default Reviews;
