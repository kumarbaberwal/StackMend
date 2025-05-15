import { API_URL } from '@/constants/api';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  isHydrated: false,
  error: null,
};

// Async login function
export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }: LoginPayload, thunkAPI) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        }),
      });

      if (!response.ok) throw new Error('Invalid credentials');

      const data = await response.json();

      // Save to AsyncStorage
      await localStorage.setItem('token', data.user.token);
      await localStorage.setItem('user', JSON.stringify(data.user));

      return { token: data.user.token, user: data.user };
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);


export const signupUser = createAsyncThunk(
  'auth/signup',
  async ({ username, email, password }: SignupPayload, thunkAPI) => {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          email,
          password
        }),
      });

      if (!response.ok) throw new Error('Invalid credentials');

      const data = await response.json();

      // Save to AsyncStorage
      await localStorage.setItem('token', data.user.token);
      await localStorage.setItem('user', JSON.stringify(data.user));

      return { token: data.user.token, user: data.user };
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
)

export const hydrateAuthFromStorage = createAsyncThunk(
  'auth/hydrate',
  async (_, thunkAPI) => {
    try {
      const token = await localStorage.getItem('token');
      const jsonUser = await localStorage.getItem('user');
      const user = jsonUser ? JSON.parse(jsonUser) : null;
      if (token && user) {
        return { token, user };
      } else {
        return thunkAPI.rejectWithValue('No session found');
      }
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logoutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await localStorage.removeItem('token');
    await localStorage.removeItem('user');
  } catch (error: any) {
    console.error('Logout failed:', error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ token: string; user: User }>) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Signup
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signupUser.fulfilled, (state, action: PayloadAction<{ token: string; user: User }>) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Hydration
      .addCase(hydrateAuthFromStorage.pending, (state) => {
        state.loading = true;
      })
      .addCase(hydrateAuthFromStorage.fulfilled, (state, action: PayloadAction<{ token: string; user: User }>) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isHydrated = true;
      })
      .addCase(hydrateAuthFromStorage.rejected, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.isHydrated = true;
      })
      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.error = null;
        state.loading = false;
      });
  },
});

export default authSlice.reducer;