import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  age: 23,
  weight:69, 
  height: 175,
};

export const BmiSlice = createSlice({
  name: "BmiBox",
  initialState,
  reducers: {
    Ageincrement: (state) => {
      if (state.age < 100) {
        state.age += 1;
      }
    },
    Agedecrement: (state) => {
      if (state.age > 5) {
        state.age -= 1;
      }
    },
    Weightincrement: (state) => {
      if (state.weight < 300) {
        state.weight += 1;
      }
    },
    Weightdecrement: (state) => {
      if (state.weight > 10) {
        state.weight -= 1;
      }
    },
    Height: (state, action) =>{
      state.height = action.payload;
    }
  },
});

export const { Ageincrement, Agedecrement, Weightincrement, Weightdecrement,Height } = BmiSlice.actions;

export default BmiSlice.reducer;
