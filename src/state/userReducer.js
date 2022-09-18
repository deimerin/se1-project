import { SET_USER, SET_LOGGEDSTATUS, SET_CEDULA, SET_PASSWORD, SET_CANDIDATES, SET_CANDIDATE } from "./types";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
      };
    case SET_LOGGEDSTATUS:
      return {
        ...state,
        loggedStatus: payload,
      };
    case SET_CEDULA:
      return {
        ...state,
        cedula: payload,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: payload,
      };
    case SET_CANDIDATES:
      return {
        ...state,
        candidates: payload,
      };
    case SET_CANDIDATE:
      return {
        ...state,
        candidate: payload,
      };

  }
};
