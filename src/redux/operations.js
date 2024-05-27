import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://664b9cb235bbda10987d92e7.mockapi.io/contacts';

const getContactsFromApi = createAsyncThunk(
  'contacts/getContactsFromApi',
  async (_, thunkApi) => {
    try {
      const resultsFromApi = await axios.get('/contacts');
      console.log(resultsFromApi);
      return resultsFromApi.data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkApi) => {
    try {
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (removedContact, thunkApi) => {
    try {
      await axios.delete(`/contacts/${removedContact}`);
      return removedContact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export { getContactsFromApi, addContact, deleteContact };
