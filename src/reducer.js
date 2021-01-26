export const initialState = {
  basket: []
};

// selector
export const costAll = basket => {
  const val = basket?.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);

  return val;
};

const reducer = (state, action) => {
  console.log(action.item);
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    case "REMOVE_ITEM":
      const newBasket = [...state.basket];
      const index = newBasket.findIndex(item => item.id === action.id);
      newBasket.splice(index, 1);
      return {
        ...state,
        basket: newBasket
      };

    default:
      return state;
  }
};

export default reducer;
