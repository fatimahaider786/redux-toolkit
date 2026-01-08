import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  userInfo: [
    {
      id: 1,
      text: "Ali",
      completed: false,
    },
    {
      id: 2,
      text: "Fatima",
      completed: false,
    },
  ],
};

export const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    addUserInfo: (state, action) => {
      const user = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.userInfo.push(user);
    },
    removeUserInfo: (state, action) => {
      state.userInfo = state.userInfo.filter(
        (user) => user.id !== action.payload
      );
    },
  },
});

export const { addUserInfo, removeUserInfo } = userSlice.actions;
export default userSlice.reducer;
