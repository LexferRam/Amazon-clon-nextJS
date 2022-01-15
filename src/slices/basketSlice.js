import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    //como si se tratara de un switch redux toolkit crea
    //automaticamente los actions types basados en los nombres 
    //de los reducer que se creen

    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id)
      let newBasket = [...state.items];

      if (index >= 0) {
        //el item existe en el basket.. eliminalo
        newBasket.splice(index, 1)
      } else {
        console.warn(`Can't remove product (id: ${action.payload.id} as its not in the basket`)
      }
      state.items = newBasket;
    },
  },
});

console.log(basketSlice)

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
// state(estado global).basket(nombre del slice).items(nombre del estado creado en ese slice);
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0)

export default basketSlice.reducer;
