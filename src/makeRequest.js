import axios from "axios";

const REACT_APP_API_TOKEN =
  "3076c178abf6eae3fd8e46f9a202c3effb36e1db7a82f05617534bcea065d8f19c9b3307bb3be0fdbf17e113b39f768d024e5209f40f8c92ad6ccdb365e68c98c3064dca683a1ffa9bca2d0ce85528055501931b24b18ca4d96679199222bb8266888f8b328b9adbc5021b1e42ac6f3d47ab021a967fff4de58ae092fcd2fd67";
const REACT_APP_API_URL = "http://localhost:1337/api";

export const makeRequest = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    Authorization: "bearer " + REACT_APP_API_TOKEN,
  },
});
