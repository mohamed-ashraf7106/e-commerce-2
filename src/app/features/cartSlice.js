import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  orders: [],
};
if (localStorage.getItem("cart")) {
  let x = JSON.parse(localStorage.getItem("cart"));
  initialState = {
    orders: x.orders,
  };
}
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      const order = {
        id: action.payload.id,
        quantity: action.payload.quantity,
      };
      state.orders = state.orders.filter((el)=>{
        return el.id != order.id
      })
      state.orders.push(order)
      localStorage.setItem("cart", JSON.stringify(state));
    },
    remOrder: (state, action) => {
      state.orders = state.orders.filter((order) => {
        return order.id != action.payload.id;
      });
      console.log("here");
      localStorage.setItem("cart", JSON.stringify(state));
    },
    emptyCart: (state, action) => {
      state.orders = [];
      localStorage.removeItem("cart");
    },
  },
});
export const { addOrder, remOrder, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
