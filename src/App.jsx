import "./assets/styles/index.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./components/layout/Layout";
import ErrorBoundary from "./pages/ErrorBoundary";

let router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<ErrorBoundary />}>
        <Route index element={<HomePage />} />
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