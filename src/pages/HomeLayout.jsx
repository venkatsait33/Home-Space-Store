import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/navbar/NavBar";
import Loading from "../components/Loading";

const HomeLayout = () => {
  const navigation = useNavigation();

  // from the useNavigation hook we can get the loading state when fetching the data from the api, it show  a loading page or component if there is any delay in the fetch the data.

  // the state is "loading" when we are fetching data, and "success" when the data is fetched successfully.

  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <div className="w-[100%] max-h-screen mx-auto">
        <Header />
        <NavBar />
        {isPageLoading ? (
          <Loading />
        ) : (
          <section className="py-20 align-element">
            <Outlet />
          </section>
        )}
      </div>
    </>
  );
};

export default HomeLayout;
