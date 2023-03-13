import { createSlice } from "@reduxjs/toolkit";

interface actionInterface {
  payload: string;
}
interface stateInterface {
  items: string[];
}

const demoSlice = createSlice({
  name: "demo",
  initialState: {
    items: [],
  },
  reducers: {
    pushItems: (state: stateInterface, action: actionInterface) => {
      state.items.push(action.payload);
    },
  },
});

export const { pushItems } = demoSlice.actions;
export default demoSlice.reducer;
