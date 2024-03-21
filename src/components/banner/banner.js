import Banner from "./Carousel";
import "./banner.css";

function BannerDiv() {
  return (
    <div className="banner-container">
      <div className="intro">
        <div className="left-intro">
          <p className="heading">A website for all your cats' essentials!</p>
          <p className="subtext">
            Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow
            Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow
          </p>
        </div>
        <div className="banner-img">
          <Banner />
        </div>
      </div>
    </div>
  );
}

export default BannerDiv;
