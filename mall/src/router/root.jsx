import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../page/Loading";
import ModifyPage from "../page/todo/ModifyPage";

const MainPage = lazy(() => import("../page/MainPage"));
const AboutPage = lazy(() => import("../page/MainPage"));
const ListPage = lazy(() => import("../page/todo/ListPage"));
const AddPage = lazy(() => import("../page/todo/AddPage"));

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
    path: "/todo/modify:tno",
    element: (
      <Suspense fallback={<Loading />}>
        <ModifyPage />
      </Suspense>
    ),
  },
]);

export default root;
