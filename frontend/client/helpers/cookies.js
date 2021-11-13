import {
  nameAuth,
} from "../constan/cookies";
import jsCookies from "js-cookie";

export const deleteAuth = () => {
  return jsCookies.remove(nameAuth);
};