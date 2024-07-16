import { Link } from "react-router-dom";

import { useState } from "react";

const HomeBanner = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="grid items-center gap-24 lg:grid-cols-2">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          We are changing the way people shop for Home.
        </h1>
        <p className="max-w-2xl mt-8 leading-8 text-md ">
          Discover a world of comfort and style at Home-Space-Store, where we
          offer an extensive range of premium furniture to suit every room in
          your home. Our collection includes elegant chairs, versatile tables,
          cozy beds, playful kids &apos; furniture, and luxurious sofas. Each
          piece is crafted with quality and design in mind, ensuring you find
          the perfect fit for your space. Transform your home with our stylish
          and functional furniture, designed to meet your every need.
        </p>
        <div className="mt-2">
          <Link to="/products" className="btn btn-primary">
            Our Products
          </Link>
        </div>{" "}
      </div>
      <div className=" h-[28rem]  carousel carousel-center p-4 space-x-4 bg-neutral rounded-box ">
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img
              src={image}
              onClick={() => handleImageClick(image)}
              className={`cursor-pointer object-cover h-full rounded-box w-80 ${
                selectedImage === image ? "border-4 border-blue-500" : ""
              }`}
            />
          </div>
        ))}
        {isModalOpen && (
          <Modal image={selectedImage} handleCloseModal={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

const Modal = ({ image, handleCloseModal }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={handleCloseModal}
    >
      <div className="relative">
        <img src={image} alt="Full size" className="h-[60%] w-[60%] mx-auto object-cover" />
        <button
          onClick={handleCloseModal}
          className="absolute p-2 rounded btn top-2 right-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
