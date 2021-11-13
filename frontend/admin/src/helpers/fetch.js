import axios from "axios";
import { userInfoFromStorage } from "src/constant/local";
const fetchData = ({
  url = "",
  method = "GET",
  token = "",
  headers = {},
  isForm = false,
  ...other
}) => {
  const userToken =
    userInfoFromStorage && userInfoFromStorage.token
      ? userInfoFromStorage.token
      : null;
  // console.log(userToken)
  return new Promise((resolve, reject) => {
    axios(url, {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": isForm ? "multipart/form-data" : "application/json",
        Authorization: `Bearer ${userToken}`,
        ...headers,
      },
      ...other,
    })
      .then((res) => {
        if (res.code >= 400) {
          reject(res);
        }
        if (res && res.data) {
          resolve(res.data);
        }
        reject(res);
      })
      .catch((e) => {
        const resp = e.response;
        console.log(resp);
        if (resp && resp.data.status === 401) {
          localStorage.removeItem("userInfo");
          window.location.href = "/login";
        }
        if (resp && resp.status === 401) {
          localStorage.removeItem("userInfo");
          window.location.href = "/login";
        }
        reject(e);
      });
  });
};

export default fetchData;
