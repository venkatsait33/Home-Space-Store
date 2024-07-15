import SectionTitle from "../SectionTitle";
import ProductsGrid from "./ProductsGrid";

const FeaturedProducts = () => {
  return (
    <div className="mt-4">
      <SectionTitle text="Featured Products" />
      <ProductsGrid />
    </div>
  );
};

export default FeaturedProducts;
