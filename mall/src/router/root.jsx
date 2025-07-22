import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../page/Loading";

// root page
const AboutPage = lazy(() => import("../page/todo/AboutPage"));
const MainPage = lazy(() => import("../page/MainPage"));
// todo page
const ListPage = lazy(() => import("../page/todo/ListPage"));
const AddPage = lazy(() => import("../page/todo/AddPage"));
const ReadPage = lazy(() => import("../page/todo/ReadPage"));
const ModifyPage = lazy(() => import("../page/todo/ModifyPage"));
// product page
const ProductListPage = lazy(() => import("../page/product/ListPage"));
const ProductAddPage = lazy(() => import("../page/product/AddPage"));
const ProductReadPage = lazy(() => import("../page/product/ReadPage"));
const ProductModifyPage = lazy(() => import("../page/product/ModifyPage"));


const root = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <MainPage />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: (
      <Suspense fallback={<Loading />}>
        <AboutPage />
      </Suspense>
    ),
  },
  {
    path: "/todo/list",
    element: (
      <Suspense fallback={<Loading />}>
        <ListPage />
      </Suspense>
    ),
  },
  {
    path: "/todo/add",
    element: (
      <Suspense fallback={<Loading />}>
        <AddPage />
      </Suspense>
    ),
  },
  {
    path: "/todo/read/:tno",
    element: (
      <Suspense fallback={<Loading />}>
        <ReadPage />
      </Suspense>
    ),
  },
  {
    path: "/todo/modify/:tno",
    element: (
      <Suspense fallback={<Loading />}>
        <ModifyPage />
      </Suspense>
    ),
  },

	// product 경로 ///////////////////////////////////////////////////////////////////////
  {
    path: "/product/list",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductListPage />
      </Suspense>
    ),
  },
  {
    path: "/product/add",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductAddPage />
      </Suspense>
    ),
  },
  {
    path: "/product/read/:pno",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductReadPage />
      </Suspense>
    ),
  },
  {
    path: "/product/modify/:pno",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductModifyPage />
      </Suspense>
    ),
  },
]);

export default root;
