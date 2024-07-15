import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

const HomeBanner = () => {
  return (
    <div className="grid items-center gap-24 lg:grid-cols-2">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          We are changing the way people shop for Home.
        </h1>
        <p className="max-w-2xl mt-8 text-md leading-8 ">
          Discover a world of comfort and style at Home-Space-Store, where we
          offer an extensive range of premium furniture to suit every room in
          your home. Our collection includes elegant chairs, versatile tables,
          cozy beds, playful kids &apos; furniture, and luxurious sofas. Each piece is
          crafted with quality and design in mind, ensuring you find the perfect
          fit for your space. Transform your home with our stylish and
          functional furniture, designed to meet your every need.
        </p>
        <div>
          <Link to="/products" className="btn btn-primary">
            Our Products
          </Link>
        </div>{" "}
      </div>
      <div className=" h-[28rem]  carousel carousel-center p-4 space-x-4 bg-neutral rounded-box ">
        {carouselImages.map((image, index) => (
          <div key={index} className="carousel-item">
            <img
              src={image}
              className="object-cover h-full rounded-box w-80 "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
