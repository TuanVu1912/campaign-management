import axiosClient from "axios";
import { LOGIN, REGISTER } from "./url";

const userApi = {
  register(data) {
    return axiosClient.post(REGISTER, data);
  },
  login(data) {
    return axiosClient.post(LOGIN, data);
  },
};


export default userApi;