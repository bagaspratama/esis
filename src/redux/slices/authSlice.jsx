import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const initialState = {
  token: JSON.parse(localStorage.getItem("token")),
  user: JSON.parse(localStorage.getItem("user")),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.token = action.payload.token;
      localStorage.setItem("token", JSON.stringify(state.token));

      state.user = jwtDecode(action.payload.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: state.user.name,
          email: state.user.email,
          url_img: state.user.url_img,
        })
      );
    },
    logoutUser: (state) => {
      state.token = null;
      localStorage.removeItem("token");
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
