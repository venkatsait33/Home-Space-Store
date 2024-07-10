import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-2 bg-neutral text-neutral-content ">
      <div className="flex justify-center gap-2 align-element sm:justify-end">
        <Link to="/login" className="text-xs link link-hover sm:text-sm">
          Sign in / Guest User
        </Link>
        <Link to="/register" className="text-xs link link-hover sm:text-sm">
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
