import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const STATUS = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  FULFILLED: 'fulfilled',
};

const operationArr = [fetchContacts, addContact, deleteContact];
const selectOperation = type => operationArr.map(operation => operation[type]);

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleFetchFulfilled = (state, { payload }) => {
  state.items = payload;
};

const handleAddFulfilled = (state, { payload }) => {
  state.items.push(payload);
};

const handleDeleteFulfilled = (state, { payload }) => {
  state.items = state.items.filter(item => item.id !== payload.id);
};

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    sortAscName(state) {
      state.items = state.items.sort((first, second) =>
        first.name.localeCompare(second.name)
      );
    },
    sortDescName(state) {
      state.items = state.items.sort((first, second) =>
        second.name.localeCompare(first.name)
      );
    },
  },
  extraReducers: builder => {
    const { PENDING, REJECTED, FULFILLED } = STATUS;
    builder
      .addCase(fetchContacts.fulfilled, handleFetchFulfilled)
      .addCase(addContact.fulfilled, handleAddFulfilled)
      .addCase(deleteContact.fulfilled, handleDeleteFulfilled)
      .addMatcher(isAnyOf(...selectOperation(PENDING)), handlePending)
      .addMatcher(isAnyOf(...selectOperation(REJECTED)), handleRejected)
      .addMatcher(isAnyOf(...selectOperation(FULFILLED)), handleFulfilled);
  },
});

export const { sortAscName, sortDescName } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
