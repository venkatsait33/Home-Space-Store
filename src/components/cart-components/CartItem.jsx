import { useDispatch } from "react-redux";
import { editItem, removeItem } from "../../redux/cartSlice";
import { formatPrice, generateAmountOptions } from "../../utils";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(removeItem({cartID}));
  };

  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };

  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;
  return (
    <article
      key={cartID}
      className="flex flex-col flex-wrap pb-6 mb-12 border-b gap-y-4 sm:flex-row border-base-300 last:border-b-0"
    >
      <img
        src={image}
        alt={title}
        className="object-cover w-24 h-24 rounded-lg sm:h-32 sm:w-32"
      />
      <div className="sm:ml-16 sm:w-48">
        <h3 className="font-medium capitalize">{title}</h3>
        <h4 className="mt-2 text-sm capitalize text-neutral-content">
          {company}
        </h4>
        <p className="flex items-center mt-4 text-sm capitalize gap-x-2">
          color:
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-12">
        <div className="max-w-xs form-control">
          <label htmlFor="amount" className="p-0 label">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            onChange={handleAmount}
            value={amount}
            className="mt-2 select select-base select-bordered select-xs"
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        <button
          className="mt-2 text-sm link link-primary link-hover"
          onClick={removeItemFromCart}
        >
          remove
        </button>
      </div>
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItem;
