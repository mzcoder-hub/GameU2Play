import axios from "axios";
import {
  CATEGORY_CREATE_FAIL,
  CATEGORY_CREATE_REQUEST,
  CATEGORY_CREATE_SUCCESS,
  CATEGORY_DETAILS_FAIL,
  CATEGORY_DETAILS_REQUEST,
  CATEGORY_DETAILS_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_UPDATE_FAIL,
  CATEGORY_UPDATE_REQUEST,
  CATEGORY_UPDATE_SUCCESS,
} from "../constants/categoryConstants";
import { baseUrl, categoryUrl } from "../../constant/api";
import fetchData from "src/helpers/fetch";

export const listCategorys = () => async (dispatch, getState) => {
  dispatch({ type: CATEGORY_LIST_REQUEST });

  fetchData({
    url: categoryUrl,
    method: "GET",
    // params: query,
  })
    .then((res) => {
      dispatch({
        type: CATEGORY_LIST_SUCCESS,
        payload: res,
      });
    })
    .catch((error) => {
      dispatch({
        type: CATEGORY_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    });
};

export const getCategoryById = (catId) => async (dispatch, getState) => {
  try {
    dispatch({ type: CATEGORY_DETAILS_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      baseUrl + `/api/v1/category/id/${catId}`,
      config
    );
    console.log("getCategoryById data", data);

    dispatch({
      type: CATEGORY_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createCategory = (category) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CATEGORY_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(
      baseUrl + `/api/v1/category`,
      category,
      config
    );

    dispatch({
      type: CATEGORY_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    // if (message === "Not authorized, token failed") {
    //   dispatch(logout());
    // }
    dispatch({
      type: CATEGORY_CREATE_FAIL,
      payload: message,
    });
  }
};

export const updateCategory = (category) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CATEGORY_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.patch(
      baseUrl + `/api/v1/category/id/${category.cat_id}`,
      category,
      config
    );

    dispatch({
      type: CATEGORY_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    // if (message === "Not authorized, token failed") {
    //   dispatch(logout());
    // }
    dispatch({
      type: CATEGORY_UPDATE_FAIL,
      payload: message,
    });
  }
};
