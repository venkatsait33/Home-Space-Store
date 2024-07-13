import { useSelector } from "react-redux";
import SectionTitle from "../components/SectionTitle";
import CartItemsList from "../components/cart-components/CartItemsList";
import CartTotals from "../components/cart-components/CartTotals";
import { Link } from "react-router-dom";

const Cart = () => {
  const user = useSelector((state) => state.userState.user);
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  if (numItemsInCart === 0) {
    return <SectionTitle text="Your Cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="grid gap-8 mt-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="mt-8 btn btn-primary btn-block">
              Proceed to checkout
            </Link>
          ) : (
            <Link to="/login" className="mt-8 btn btn-primary btn-block">
              Please Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
