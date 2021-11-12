import axios from "axios";
import jsCookies from "js-cookie";
const fetchData = ({
  url = "",
  method = "GET",
  token = "",
  headers = {},
  isForm = false,
  ...other

}) => {
  const userLogin = jsCookies.get("userLogin");
  console.log("userLogin", userLogin)
  const userToken = token ? token : userLogin ? userLogin.token : null;
  console.log(userToken)
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
        console.log("respone error fetch", e.response.data)
        // const resp = e.response;
        // if (resp) { 
        //   if (resp.data.status === 401) { 
        //     // Object.keys(jsCookies.get()).forEach(function (cookieName) {
        //     //   var neededAttributes = {
        //     //     // Here you pass the same attributes that were used when the cookie was created
        //     //     // and are required when removing the cookie
        //     //   };
        //     //   jsCookies.remove(cookieName, neededAttributes);
        //     // }); 
        //   }
        // }
        reject(e);
      });
  });
};

export default fetchData;
