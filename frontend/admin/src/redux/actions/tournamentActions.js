import axios from "axios";
import {
  TOURNAMENT_CREATE_FAIL,
  TOURNAMENT_CREATE_REQUEST,
  TOURNAMENT_CREATE_SUCCESS,
  TOURNAMENT_DETAILS_FAIL,
  TOURNAMENT_DETAILS_REQUEST,
  TOURNAMENT_DETAILS_SUCCESS,
  TOURNAMENT_LIST_FAIL,
  TOURNAMENT_LIST_REQUEST,
  TOURNAMENT_LIST_SUCCESS,
  TOURNAMENT_UPDATE_FAIL,
  TOURNAMENT_UPDATE_REQUEST,
  TOURNAMENT_UPDATE_SUCCESS,
} from "../constants/tournamentConstants";
import { baseUrl } from "../../constant/api";

export const listTournaments = () => async (dispatch, getState) => {
  try {
    dispatch({ type: TOURNAMENT_LIST_REQUEST });

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
      baseUrl + `/api/v1/tournament/details`,
      config
    );

    dispatch({
      type: TOURNAMENT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TOURNAMENT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getTournamentById =
  (tournament_id) => async (dispatch, getState) => {
    try {
      dispatch({ type: TOURNAMENT_DETAILS_REQUEST });

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
        baseUrl + `/api/v1/tournament/detail/${tournament_id}`,
        config
      );

      dispatch({
        type: TOURNAMENT_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TOURNAMENT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const createTournament = (tournament) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TOURNAMENT_CREATE_REQUEST,
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
      baseUrl + `/api/v1/tournament`,
      tournament,
      config
    );

    dispatch({
      type: TOURNAMENT_CREATE_SUCCESS,
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
      type: TOURNAMENT_CREATE_FAIL,
      payload: message,
    });
  }
};

export const updateTournament = (tournament) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TOURNAMENT_UPDATE_REQUEST,
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
      baseUrl + `/api/v1/tournament/id/${tournament.cat_id}`,
      tournament,
      config
    );

    dispatch({
      type: TOURNAMENT_UPDATE_SUCCESS,
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
      type: TOURNAMENT_UPDATE_FAIL,
      payload: message,
    });
  }
};
