import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SidebarLayout from "../components/layout/SidebarLayout";
import LazyLoad from "../components/LazyLoad";
import NotFoundPage from "../pages/NotFoundPage";

const HomePage = React.lazy(() => import("../pages/HomePage"));
const AboutPage = React.lazy(() => import("../pages/AboutPage"));
const Product = React.lazy(() => import("../pages/product/Product"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SidebarLayout />}>
      <Route path="/" element={<SidebarLayout />}>
        <Route index element={LazyLoad(HomePage)} />
        <Route path="/about" element={LazyLoad(AboutPage)} />
        <Route path="/product" element={LazyLoad(Product)} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Route>
  )
);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
