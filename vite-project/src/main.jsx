import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404Component from "./components/Error404Component.jsx";
import { useRouteError } from "react-router-dom";
import Header from "./components/Header.jsx";
import ProductList from "./components/ProductList.jsx";
import Spinner from "./components/Spinner.jsx";

const About = lazy(()=> import('./components/About.jsx'))
const Contact = lazy(()=> import('./components/Contact.jsx'))
const SearchPage = lazy(()=> import('./components/SearchPage.jsx'))
const CartPage = lazy(()=> import('./components/CartPage.jsx'))
const ViewMore = lazy(()=> import('./components/ViewMore.jsx'))
const appRouter = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error404Component />,
    element: <App />,
    children: [
      {
        path: "/",
        element: [<Header />, <ProductList />],
      },
      {
        path: "/About",
        element: <Suspense fallback = {<Spinner/>}><About /></Suspense>,
      },
      {
        path: "/Contact",
        element: <Suspense fallback = {<Spinner/>}><Contact /></Suspense>,
      },
      {
        path: "/searchPage",
        element: <Suspense fallback = {<Spinner/>}><SearchPage /></Suspense>,
      },
      {
        path: "/cartPage",
        element: <Suspense fallback = {<Spinner/>}><CartPage /></Suspense>,
      },
      {
        path: "/item/:id",
        element: <Suspense fallback = {<Spinner/>}><ViewMore /></Suspense>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
