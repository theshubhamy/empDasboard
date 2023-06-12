import { createAsyncThunk } from "@reduxjs/toolkit";
import empApi from "../api/empApi";

export const userLogin = createAsyncThunk(
  "userLogin",
  async (formData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // make request to backend
      const { data } = await empApi.post("/user/signin", formData, config);
      // store user's token in local storage
      sessionStorage.setItem("authInfo", JSON.stringify(data));
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.response);
      }
    }
  }
);
export const userRegister = createAsyncThunk(
  "userRegister",
  async (formData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      // make request to backend
      const { data } = await empApi.post("/user/signup", formData, config);
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
