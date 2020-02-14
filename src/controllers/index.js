const axios = require("axios");
const url = "https://task-scheduling-backend.herokuapp.com";

exports.authLogin = async params => {
  let res = {};
  await axios
    .post(`${url}/personnel/login`, params)
    .then(resp => {
      res = resp.data;
    })
    .catch(err => {
      res = err.response.data;
    });
  return res;
};
