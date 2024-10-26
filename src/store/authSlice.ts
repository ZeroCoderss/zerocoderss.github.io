import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserData } from "./apiService"; // Adjust the import path as needed
import { deleteCookie } from "@/lib/cookies";

interface User {
  id: string;
  name: string;
  email: string;
  // Add other user properties as needed
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk<User, string>(
  "auth/fetchUser",
  async (token: string) => {
    const userData = await fetchUserData(token);
    return userData;
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;

      deleteCookie("token");
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch user data";
      });
  },
});

export const { login, logout, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;
