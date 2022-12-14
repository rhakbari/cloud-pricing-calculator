import React, { lazy, Suspense, useReducer } from "react";
import asyncComponent from "../src/components/asyncComponent";
// import dynamic from "next/dynamic";
import Loader from "../src/components/loader";
// const Loader = lazy(() => import('../src/components/loader'));

const MainPage = asyncComponent(() => import("../src/modules/mainPage"));

export default function App() {
  return (
    // <Suspense fallback={<Loader/>}>
      <MainPage />
    // </Suspense>
  );
}
