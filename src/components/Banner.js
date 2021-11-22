import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import "../styles/Banner.css";

export default function Banner() {
  return (
    <section id="banner">
      <div className="banner-text">
        <h1>Travel & Explore</h1>
        <p>
          Travo is the largest independently owned travel agency headquartered
          in California, and consistently ranked among the top 50 largest in the
          United States.
        </p>

        <button className="t-btn-lg">
          Book My Tour <BiRightArrowAlt />
        </button>
      </div>
    </section>
  );
}
