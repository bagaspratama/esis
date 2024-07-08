import { loginUser, logoutUser } from "../slices/authSlice";

export const login = (userData) => (dispatch) => {
  // Logic for authenticating user
  dispatch(loginUser(userData));
};

export const logout = () => (dispatch) => {
  // Logic for logging out user
  dispatch(logoutUser());
};
