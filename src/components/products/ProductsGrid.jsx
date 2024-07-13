import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../../utils";

// the products data passed from loader data from the landing page loader by using the loader function from react-router-dom
const ProductsGrid = () => {
  const { products } = useLoaderData();

  return (
    <div className="grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const rupeesAmount = formatPrice(price);
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="transition duration-300 shadow-xl card hover:shadow-2xl"
          >
            <figure className="">
              <img
                src={image}
                alt={title}
                className="object-cover w-[90%] h-64 rounded-xl md:h-48"
              />
            </figure>
            <div className="card-body">
              <h2 className="flex justify-between tracking-wider capitalize card-title">
                {title} <span className="text-secondary">{rupeesAmount}</span>
              </h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
