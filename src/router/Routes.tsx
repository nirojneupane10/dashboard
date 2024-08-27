import React, { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SidebarLayout from "../components/layout/SidebarLayout";

const HomePage = React.lazy(() => import("../pages/HomePage"));
const AboutPage = React.lazy(() => import("../pages/AboutPage"));
const Product = React.lazy(() => import("../pages/product/Product"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SidebarLayout />}>
      <Route
        index
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <AboutPage />
          </Suspense>
        }
      />
      <Route
        path="/product"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Product />
          </Suspense>
        }
      />
    </Route>
  )
);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
