
const About = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-x-6">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          The{" "}
        </h1>
        <div className="shadow stats bg-primary">
          <div className="stat">
            <div className="text-4xl font-bold tracking-widest stat-title text-primary-content">
              Home-Space
            </div>
          </div>
        </div>
      </div>
      <p className="max-w-2xl mx-auto mt-6 text-lg leading-8">
        Welcome to Home-Space-Store, your one-stop destination for all your home
        furniture needs. We offer a wide range of quality furniture, including
        chairs, tables, beds, kids' furniture, and sofas, designed to elevate
        the comfort and style of your home. Whether you're furnishing a new
        space or upgrading your existing decor, our collection ensures you'll
        find the perfect pieces to complement your home. Explore our selection
        for stylish and durable furniture that caters to every room and every
        member of your family.
      </p>
    </>
  );
};

export default About;
