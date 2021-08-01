import React from "react";

const Users = React.lazy(() => import("./views/users/Users"));
const User = React.lazy(() => import("./views/users/User"));

// Page

const Login = React.lazy(() => import("./views/pages/login/Login"));
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const PostList = React.lazy(() => import("./views/posts/Posts"));
const PostId = React.lazy(() => import("./views/posts/Post"));
const CatList = React.lazy(() => import("./views/category/CategoryList"));
const CatId = React.lazy(() => import("./views/category/CatId"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/login", exact: false, name: "login", component: Login },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/post/list", name: "Post List", component: PostList },
  { path: "/post/:id", exact: true, name: "Post Detail", component: PostId },
  { path: "/category/list", name: "Category List", component: CatList },
  {
    path: "/category/:id",
    exact: true,
    name: "Category Detail",
    component: CatId,
  },

  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User },
];

export default routes;
