import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const order = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      //   state.movieId = action.payload;
      //   state.date = action.payload;
      //   state.time = action.payload;
      //   state.cinemaId = action.payload;
      //   state.seatId = [...state.seatId, ...action.payload.seatId];
      //   state.paymentId = action.payload;
      state.data = action.payload;
    },
    setResponse: (state, action) => {
      //   state.movieId = action.payload;
      //   state.date = action.payload;
      //   state.time = action.payload;
      //   state.cinemaId = action.payload;
      //   state.seatId = [...state.seatId, ...action.payload.seatId];
      //   state.paymentId = action.payload;
      state.data = action.payload;
    },
  },
});

export const { setOrder, setResponse } = order.actions;
export default order.reducer;
