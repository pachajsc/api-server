import axios from "axios";


const apiBase = axios.create({
  baseURL:
    "http://misitio.com",
});



export { apiBase };
