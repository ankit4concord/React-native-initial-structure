import { createSlice } from "@reduxjs/toolkit";

interface actionInterface {
  payload: string | null;
}
interface stateInterface {
  user_token: string | null;
}

const authSlice = createSlice({
  name: "Auth",
  initialState: {
    user_token: null,
  },
  reducers: {
    setUserToken: (state: stateInterface, action: actionInterface) => {
      state.user_token = action.payload;
    },
  },
});

export const { setUserToken } = authSlice.actions;
export default authSlice.reducer;
