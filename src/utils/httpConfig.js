import axios from "axios";
const isDesa = process.env.NODE_ENV === "development";
//https://lcms.iebschool.com/api/clase/BZOHiTYfq75PRQoA6sFhw0wJieljl6GNWkl55aal752OLgfIzKPWBbuKgHTsDq7pBjkxjkJgfBWRH1q7C6T48fEfMnygEww6FHsOR2UYtHF2yW01SJUQOpXrEkz9GW5csoQbhCZC9utygjp0TbHzqtQUEgUb2Qek5UmdnbFnw0LDa1sT30ikj06O6QPYxT9sFlwTn27JSIdSAwCtlLEwBAaygQmDBmX7yiQMbNlTmoCML56YHBj81kx71JBsWnp/frontend/?md5_email=6a5827e1d34cb6a32d355c7d45a34bf9
const setToken = (token) => localStorage.setItem("token", token);

const getToken = () => localStorage.getItem("token");

const config = axios.create({
  baseURL: isDesa
    ? "http://localhost:3000/cursos"
    : "https://iebs.dev-test.com.ar/lcms-app/public-service/curso.json",
});

const method = {
  get: "GET",
  post: "POST",
  put: "PUT",
  delete: "DELETE",
};

const token =
  "BZOHiTYfq75PRQoA6sFhw0wJieljl6GNWkl55aal752OLgfIzKPWBbuKgHTsDq7pBjkxjkJgfBWRH1q7C6T48fEfMnygEww6FHsOR2UYtHF2yW01SJUQOpXrEkz9GW5csoQbhCZC9utygjp0TbHzqtQUEgUb2Qek5UmdnbFnw0LDa1sT30ikj06O6QPYxT9sFlwTn27JSIdSAwCtlLEwBAaygQmDBmX7yiQMbNlTmoCML56YHBj81kx71JBsWnp/frontend/?md5_email=6a5827e1d34cb6a32d355c7d45a34bf9";

config.interceptors.request.use(
  (req) => {
    if (req.url !== "authentication") {
      req.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    return req;
  },
  (error) => Promise.reject(error)
);
config.interceptors.response.use(
  (res) => {
    if (res.config.url === "authentication" && res.data.token) {
      setToken(res.data.token);
    }
    return res;
  },
  (error) => Promise.reject(error)
);

export { config, method };
