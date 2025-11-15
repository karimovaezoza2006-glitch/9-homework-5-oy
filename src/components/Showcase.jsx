import React from "react";

// Local images
import ContainerImg from "../assets/img/Container.png";
import Link1Img from "../assets/img/link1.png";
import LinkImg from "../assets/img/Link.png";

const Carousel = () => {
  return (
    <section className="px-8 md:px-16 pt-[200px]">
      <div className="container mx-auto">

        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>

            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>

            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          {/* Slides */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={ContainerImg} className="d-block w-100" alt="Slide-1" />
            </div>

            <div className="carousel-item">
              <img src={Link1Img} className="d-block w-100" alt="Slide-2" />
            </div>

            <div className="carousel-item">
              <img src={LinkImg} className="d-block w-100" alt="Slide-3" />
            </div>
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Carousel;

