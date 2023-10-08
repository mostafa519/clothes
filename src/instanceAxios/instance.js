import axios from "axios";

const Instance = axios.create({
  baseURL: "https://labsny.net/api",
  // params: {
  //   apiKey: "5a72e6ea7b5640b8a0422619db6c9d91",
  // },
});

export default Instance;
