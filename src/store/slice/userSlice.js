import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setReduxUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setReduxUser } = userSlice.actions;
export default userSlice.reducer;
