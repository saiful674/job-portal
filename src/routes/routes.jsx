import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AppliedJobPageHome from "../pages/AppliedJobPage/AppliedJobPageHome";
import Home from "../pages/HomaPage/Home/Home";
import PostJobPageHome from "../pages/PostJobPage/PostJobPageHome";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'postJob',
            element: <PostJobPageHome></PostJobPageHome>
        },
        {
            path:'appliedJob',
            element: <AppliedJobPageHome/>
        },
      ]
    },
  ]);

export default router;