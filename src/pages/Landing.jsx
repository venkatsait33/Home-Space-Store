import HomeBanner from "../components/HomeBanner";
import FeaturedProducts from "../components/products/FeaturedProducts";
import { customFetch } from "../utils";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero6.jpg";

const carouselImages = [hero1, hero2, hero3, hero4, hero5, hero6];

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
      <HomeBanner images={carouselImages} />
      <FeaturedProducts />
    </div>
  );
};

export default Landing;
