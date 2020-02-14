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
exports.getTasks = async params => {
  let res = {};
  await axios
    .get(
      `${url}/tasks/assigned?page=${params.page}&limit=${params.limit}&order=${params.order}&orderMethod=${params.orderMethod}`,
      {
        headers: {
          accessToken: params.token
        }
      }
    )
    .then(resp => {
      res = resp.data;
    })
    .catch(err => {
      res = err.response.data;
    });
  return res;
};
