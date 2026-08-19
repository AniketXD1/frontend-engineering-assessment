import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import TermsPage from "./components/TermsPage";
import LoginPage from "./components/LoginPage";
import OtpPage from "./components/OtpPage";
import CreateProfile from "./components/CreateProfile";
import LocationInfo from "./components/LocationInfo";
import AdditionalInfo from "./components/AdditionalInfo";
import ReviewPage from "./components/ReviewPage";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import SuccessPage from "./components/SuccessPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/terms",
    element: <TermsPage />,
  },

  {
    path: "/signup",
    element: <LoginPage />,
  },
  {
    path: "/signup/otp",
    element: <OtpPage />,
  },
  {
    path: "/signup/profile",
    element: <CreateProfile />,
  },
  {
    path: "/signup/location",
    element: <LocationInfo />,
  },
  {
    path: "/signup/additional-info",
    element: <AdditionalInfo />,
  },
  {
    path: "/signup/review",
    element: <ReviewPage />,
  },
  {
    path: "/signup/success",
    element: <SuccessPage />,
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />{" "}
    </Provider>
  );
}

export default App;
