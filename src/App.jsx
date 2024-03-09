import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Body from "./components/Body";
import Home from "./components/Home";

import Projects from "./components/Projects";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      element: <Body />,
      errorElement: <div>Hello</div>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/project",
          element: <Projects />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
