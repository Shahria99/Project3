import "./Hero.css";
import heroImage from "./images/hero_image.jpg";
function Hero() {
  return (
    <>
      <div className="hero-container">
        <div>
          <h3 className="hero-heading">
            Crafting Universal &{" "}
            <span className="hero-headingDesign">
              Delightful Design Journeys
            </span>{" "}
            for Everyone<span className="hero-headingDot">.</span>
          </h3>
          <p className="hero-description">
            It is a long-established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum. In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entirely.
          </p>
          <button className="hero-btn">Explore</button>
        </div>
        <div>
          <img className="hero-image" src={heroImage} alt="Hero-Image" />
        </div>
      </div>

      <div className="card-container">
        <div className="card-body">
          <h3 className="card-title">Founded</h3>
          <p className="card-description">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="card-body">
          <h3 className="card-title">50M Montly Enrichments</h3>
          <p className="card-description">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="card-body">
          <h3 className="card-title">400K User</h3>
          <p className="card-description">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
