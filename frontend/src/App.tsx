import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import { HomePage } from "./components/Home/HomePage";
import OnboardingScanPage from "./components/Onboarding/OnboardingPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/onboard",
      element: <OnboardingScanPage />,
    },
  ]);

  return (
    <RecoilRoot>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </RecoilRoot>
  );
}

export default App;
