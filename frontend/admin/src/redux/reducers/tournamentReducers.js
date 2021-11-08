import {
  TOURNAMENT_CREATE_FAIL,
  TOURNAMENT_CREATE_REQUEST,
  TOURNAMENT_CREATE_RESET,
  TOURNAMENT_CREATE_SUCCESS,
  TOURNAMENT_DETAILS_FAIL,
  TOURNAMENT_DETAILS_REQUEST,
  TOURNAMENT_DETAILS_SUCCESS,
  TOURNAMENT_LIST_FAIL,
  TOURNAMENT_LIST_REQUEST,
  TOURNAMENT_LIST_SUCCESS,
  TOURNAMENT_UPDATE_FAIL,
  TOURNAMENT_UPDATE_REQUEST,
  TOURNAMENT_UPDATE_RESET,
  TOURNAMENT_UPDATE_SUCCESS,
} from "../constants/tournamentConstants";

export const tournamentListReducer = (state = { tournaments: [] }, action) => {
  switch (action.type) {
    case TOURNAMENT_LIST_REQUEST:
      return { loading: true, tournaments: [] };
    case TOURNAMENT_LIST_SUCCESS:
      return {
        loading: false,
        tournaments: action.payload,
      };
    case TOURNAMENT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tournamentDetailsReducer = (
  state = { tournament: {} },
  action
) => {
  switch (action.type) {
    case TOURNAMENT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case TOURNAMENT_DETAILS_SUCCESS:
      return { loading: false, tournament: action.payload };
    case TOURNAMENT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tournamentCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case TOURNAMENT_CREATE_REQUEST:
      return { loading: true };
    case TOURNAMENT_CREATE_SUCCESS:
      return { loading: false, success: true, tournament: action.payload };
    case TOURNAMENT_CREATE_FAIL:
      return { loading: false, error: JSON.parse(action.payload) };
    case TOURNAMENT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const tournamentUpdateReducer = (state = { tournament: {} }, action) => {
  switch (action.type) {
    case TOURNAMENT_UPDATE_REQUEST:
      return { loading: true };
    case TOURNAMENT_UPDATE_SUCCESS:
      return { loading: false, success: true, tournament: action.payload };
    case TOURNAMENT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case TOURNAMENT_UPDATE_RESET:
      return { tournament: {} };
    default:
      return state;
  }
};
