import { Form, Link, useLoaderData } from "react-router-dom";
import {
  FormCheckBox,
  FormInput,
  FormRange,
  FormSelect,
} from "./form-components";

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;

  return (
    <Form className="grid items-center px-8 py-4 rounded-md bg-base-200 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <FormInput
        type="search"
        label="Search Product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      <FormSelect
        label="Select Category"
        name="category"
        size="input-sm"
        defaultValue={category}
        list={meta.categories}
      />
      <FormSelect
        label="Select Company"
        name="company"
        size="input-sm"
        defaultValue={company}
        list={meta.companies}
      />
      <FormSelect
        list={["a-z", "z-a", "high", "low"]}
        label="Sort by"
        name="order"
        size="select-sm"
        defaultValue={order}
      />
      <FormRange
        name="price"
        label="select price"
        size="range-sm"
        price={price}
      />
      <FormCheckBox
        name="shipping"
        label="free shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
