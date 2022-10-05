import axios from "axios";
var localhost = "http://192.168.1.106:5000";

export default axios.create({
  baseURL: localhost,
});
