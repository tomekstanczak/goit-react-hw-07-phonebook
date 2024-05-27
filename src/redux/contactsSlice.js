import { createSlice } from '@reduxjs/toolkit';
import { getContactsFromApi, addContact, deleteContact } from './operations';

const initialContactsState = {
  isLoading: false,
  error: null,
  items: [],
};

const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const pending = state => {
  state.isLoading = true;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  extraReducers: builder => {
    builder
      .addCase(getContactsFromApi.pending, pending)
      .addCase(getContactsFromApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(getContactsFromApi.rejected, rejected)
      .addCase(addContact.pending, pending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, rejected)
      .addCase(deleteContact.pending, pending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(deleteContact.rejected, rejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
