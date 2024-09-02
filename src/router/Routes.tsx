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
import LoginForms from "../components/forms/LoginForms";
import ProtectedRoute from "./ProtectedRoutes";
import ProductForms from "../pages/product/components/form/ProductForm";
import UpdateProductForms from "../pages/product/components/form/updateForm";

const HomePage = React.lazy(() => import("../pages/HomePage"));
const AboutPage = React.lazy(() => import("../pages/AboutPage"));
const Product = React.lazy(() => import("../pages/product/Product"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public Routes */}
      <Route path="/login" element={<LoginForms />} />

      {/* Protected Routes */}
      <Route path="/" element={<ProtectedRoute element={<SidebarLayout />} />}>
        <Route index element={LazyLoad(HomePage)} />
        <Route path="/about" element={LazyLoad(AboutPage)} />
        <Route path="/product" element={LazyLoad(Product)} />
        <Route path="/addProduct" element={LazyLoad(ProductForms)} />
        <Route path="/updateProduct" element={LazyLoad(UpdateProductForms)} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </>
  )
);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
