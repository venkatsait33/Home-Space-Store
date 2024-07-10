import HomeBanner from "../components/HomeBanner";
import FeaturedProducts from "../components/products/FeaturedProducts";
import { customFetch } from "../utils";

const url = "/products?featured=true";

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <div>
      <HomeBanner />
      <FeaturedProducts />
    </div>
  );
};

export default Landing;
