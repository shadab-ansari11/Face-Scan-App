import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  selectContact: null,
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setContact: (state, action: PayloadAction<any | null>) => {
      state.selectContact = action.payload;
    },
    resetContact: state => {
      state.selectContact = null;
    },
  },
});

export const {setContact, resetContact} = contactSlice.actions;

export default contactSlice.reducer;
