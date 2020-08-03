import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

export default {
  service,

  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/api/auth/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/api/auth/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getAllUsers() {
    return service
      .get("/api/users")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getOneUser(id) {
    return service
      .get(`/api/users/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  createOneUser(data) {
    return service
      .post("/api/users", data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateOneUser(id, data) {
    return service
      .patch(`/api/users/${id}`, data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteOneUser(id) {
    return service
      .delete(`/api/users/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getAllEmotions() {
    return service
      .get("/api/emotions")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getOneEmotion(id) {
    return service
      .get(`/api/emotions/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  createOneEmotion(data) {
    return service
      .post("/api/emotions",data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateOneEmotion(id, data) {
    return service
      .patch(`/api/emotions/${id}`, data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteOneEmotion(id) {
    return service
      .delete(`/api/emotions/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },
};
