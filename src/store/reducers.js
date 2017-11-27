const mainReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER": {
      return {
        ...state,
        counter: state.counter + 1
      };
    }

    case "DECREMENT_COUNTER": {
      return {
        ...state,
        counter: state.counter - 1
      };
    }

    default:
      return state;
  }
  return state;
};

export default mainReducer;
