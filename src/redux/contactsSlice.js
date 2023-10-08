import toast from 'react-hot-toast';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const STATUS = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  FULFILLED: 'fulfilled',
};

const operationArr = [fetchContacts, addContact, deleteContact];
const selectOperation = type => operationArr.map(operation => operation[type]);

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
  state.isDeleting = { status: false, id: '' };
  state.isAdding = false;
};

const handleFetchPending = state => {
  state.isLoading = true;
};

const handleFetchFulfilled = (state, { payload }) => {
  state.items = payload;
};

const handleAddFulfilled = (state, { payload }) => {
  state.items.push(payload);
  toast.success(`You added ${payload.name} to your phonebook`);
};

const handleAddPending = state => {
  state.isAdding = true;
};

const handleDeleteFulfilled = (state, { payload }) => {
  state.items = state.items.filter(item => item.id !== payload.id);
};

const handleDeletePending = (state, action) => {
  state.isDeleting = { status: true, id: action.meta.arg };
};

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  isDeleting: { status: false, id: '' },
  isAdding: false,
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
    const { REJECTED, FULFILLED } = STATUS;
    builder
      .addCase(fetchContacts.fulfilled, handleFetchFulfilled)
      .addCase(fetchContacts.pending, handleFetchPending)
      .addCase(addContact.fulfilled, handleAddFulfilled)
      .addCase(addContact.pending, handleAddPending)
      .addCase(deleteContact.fulfilled, handleDeleteFulfilled)
      .addCase(deleteContact.pending, handleDeletePending)
      .addMatcher(isAnyOf(...selectOperation(REJECTED)), handleRejected)
      .addMatcher(isAnyOf(...selectOperation(FULFILLED)), handleFulfilled);
  },
});

export const { sortAscName, sortDescName } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
