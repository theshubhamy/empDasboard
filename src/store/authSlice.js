import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister } from "./authActions";

const initialState = {
  loading: false,
  authInfo: sessionStorage.getItem("authInfo")
    ? JSON.parse(sessionStorage.getItem("authInfo"))
    : null,
  error: null,
  success: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      sessionStorage.removeItem("authInfo"); // deletes token from storage
      state.loading = false;
      state.authInfo = null;
      state.error = null;
      state.success = null;
    },
  },
  extraReducers: {
    // userLogin
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.authInfo = payload;
      state.success = payload.message;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload.message;
      state.success = null;
    },
    [userRegister.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    },
    [userRegister.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = payload.message;
      state.error = null;
    },
    [userRegister.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload.message;
      state.success = null;
    },
  },
});
// export actions
export const { logout } = authSlice.actions;
export default authSlice.reducer;
