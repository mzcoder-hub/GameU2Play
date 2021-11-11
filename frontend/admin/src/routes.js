import React from "react";

const Users = React.lazy(() => import("./views/users/Users"));
const UsersEdit = React.lazy(() => import("./views/users/Update"));
// const UserCreate = React.lazy(() => import("./views/users/Add"));

// Page

const Login = React.lazy(() => import("./views/pages/login/Login"));
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const PostList = React.lazy(() => import("./views/posts/Posts"));
const PostId = React.lazy(() => import("./views/posts/EditPost"));
const AddPosts = React.lazy(() => import("./views/posts/AddPosts"));
const CatList = React.lazy(() => import("./views/category/CategoryList"));
const CatEdit = React.lazy(() => import("./views/category/EditCategory"));
const CatAdd = React.lazy(() => import("./views/category/AddCategory"));
const TourList = React.lazy(() => import("./views/tournament/list"));
const TourCreate = React.lazy(() => import("./views/tournament/create"));
const TourUpdate = React.lazy(() => import("./views/tournament/update"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/login", exact: false, name: "login", component: Login },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/post/list", name: "Post List", component: PostList },
  { path: "/post/add", name: "Post List", component: AddPosts },
  {
    path: "/post/edit/:id",
    exact: true,
    name: "Post Detail",
    component: PostId,
  },
  { path: "/category/list", name: "Category List", component: CatList },
  { path: "/category/add", name: "Add Category", component: CatAdd },
  {
    path: "/category/edit/:id",
    exact: true,
    name: "Category Detail",
    component: CatEdit,
  },
  { path: "/tournament/list", name: "Tournament List", component: TourList },
  { path: "/tournament/add", name: "Add Tournament", component: TourCreate },
  {
    path: "/tournament/edit/:id",
    exact: true,
    name: "Tournament Detail",
    component: TourUpdate,
  },

  { path: "/users/list", exact: true, name: "Users", component: Users },
  {
    path: "/users/add",
    exact: true,
    name: "Users Add",
    component: UsersEdit,
  },
  {
    path: "/users/edit/:id",
    exact: true,
    name: "Users Edit",
    component: UsersEdit,
  },
  // { path: "/users/:id", exact: true, name: "User Details", component: User },
];

export default routes;
