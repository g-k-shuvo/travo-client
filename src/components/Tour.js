import React from "react";
import { Image } from "react-bootstrap";
import {
  MdLocationPin,
  MdOutlineWatchLater,
  MdPersonOutline,
} from "react-icons/md";
import { useHistory } from "react-router-dom";
import "../styles/Tour.css";

export default function Tour({ tour }) {
  const history = useHistory();
  const handleRoute = () => {
    history.push(`/tours/${tour._id}`);
  };
  return (
    <div className="tour">
      <div className="tour-image">
        <Image src={tour.image} />
      </div>
      <div className="tour-content">
        <h3>{tour.title}</h3>
        <div className="tour-info">
          <button onClick={handleRoute} className="t-btn-sm">
            Book Now
          </button>
          <h4>${tour.price}</h4>
        </div>
      </div>
      <div className="tour-meta">
        <div className="day">
          <p>
            <span>
              <MdOutlineWatchLater />
            </span>
            {tour.duration} Days
          </p>
        </div>
        <div className="age">
          <p>
            <span>
              <MdPersonOutline />
            </span>
            {tour.age}+
          </p>
        </div>
        <div className="day">
          <p>
            <span>
              <MdLocationPin />
            </span>
            {tour.location}
          </p>
        </div>
      </div>
    </div>
  );
}
