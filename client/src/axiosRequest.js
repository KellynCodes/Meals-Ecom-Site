import Axios from "axios";

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;

console.log(TOKEN);
const BASE_URL = "http://localhost:4000/api";

export const publicRequest = Axios.create({
  baseURL: BASE_URL,
});

export const userRequest = Axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
