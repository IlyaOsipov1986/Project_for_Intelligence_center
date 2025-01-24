import "./assets/styles/index.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Partners from "./pages/PartnersPage/PartnersPage";
import SiteInDevelopment from "./pages/SiteInDevelopment/SiteInDevelopment";
import DefaultLayout from "./components/layout/DefaultLayout";
import Layout from "./components/layout/Layout";
import ErrorBoundary from "./pages/ErrorBoundary";

let router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<ErrorBoundary />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="partners" element={<DefaultLayout/>}>
        <Route index element={<SiteInDevelopment />}/>
      </Route>
    </>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
