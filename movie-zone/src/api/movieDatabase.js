import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "42fafab1d67d95a1993da7575e94ff60",
  },
});
