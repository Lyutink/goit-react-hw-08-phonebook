import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);

    return data;
  } catch (error) {
    toast.error(
      `Check the registration data. Your password must be more than 7 characters long or this EMAIL may already be registered`
    );
  }
});

const logIn = createAsyncThunk('auth/login', async userData => {
  try {
    const { data } = await axios.post('/users/login', userData);
    token.set(data.token);

    return data;
  } catch (error) {
    toast.error(`Wrong password or email`);
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      alert('Something went wrong, please reload the page');
    }
  }
);

export const authOperations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
