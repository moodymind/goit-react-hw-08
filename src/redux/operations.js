import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66bc753424da2de7ff6a9bbc.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contactList/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contactList");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contactList/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.get("/contactList", { newContact });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contactList/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contactList/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
