import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./NewsSlider.css";
import Slide from "../Slide/Slide";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <FiChevronRight size={22} />
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <FiChevronLeft size={22} />
    </div>
  );
};

const reviews = [
  "Your company’s innovative approach and use of modern technologies truly impressed us. We wish you continued success!",
  "Working with your team has been a fantastic experience. The professionalism you demonstrated exceeded our expectations.",
  "The quality of service and attention to detail were outstanding. Your solutions helped us optimize our processes and achieve better results.",
  "We truly appreciate your dedication and commitment to delivering excellence. The results positively impacted our business growth.",
  "Your forward-thinking mindset and creative problem-solving skills set you apart. The collaboration was smooth and productive.",
  "From start to finish, the entire process was handled with professionalism and care. Highly recommended!"
];

const NewsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1175,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="news-slider-container">
      <h2>
        Shape the Future
        <br /> With Your Ideas!
      </h2>

      <div className="sliders">
        <Slider {...settings}>
          {reviews.map((review, i) => (
            <div key={i} className="part-slider">
              <Slide text={review} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewsSlider;
