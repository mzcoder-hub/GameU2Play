import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  categoryCreateReducer,
  categoryDetailsReducer,
  categoryListReducer,
  categoryUpdateReducer,
} from "./redux/reducers/categoryReducers";
import {
  postCreateReducer,
  postDetailsReducer,
  postListReducer,
  postUpdateReducer,
} from "./redux/reducers/postReducers";
import {
  tournamentCreateReducer,
  tournamentDetailsReducer,
  tournamentListReducer,
  tournamentUpdateReducer,
} from "./redux/reducers/tournamentReducers";
import {
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userUpdateReducer,
} from "./redux/reducers/userReducers";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const changeState = (
  state = { sidebarShow: "responsive" },
  { type, ...rest }
) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    default:
      return state;
  }
};

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const reducer = combineReducers({
  changeState,
  userLogin: userLoginReducer,
  allPostList: postListReducer,
  detailedPost: postDetailsReducer,
  createPost: postCreateReducer,
  updatePost: postUpdateReducer,
  allCategoryList: categoryListReducer,
  detailedCategory: categoryDetailsReducer,
  createsCategory: categoryCreateReducer,
  updateCategory: categoryUpdateReducer,
  tournamentList: tournamentListReducer,
  tournamentDetail: tournamentDetailsReducer,
  tournamentCreate: tournamentCreateReducer,
  tournamentUpdate: tournamentUpdateReducer,
  userList: userListReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
  userDelete: userDeleteReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
