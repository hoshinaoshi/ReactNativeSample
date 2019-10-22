// action type
const INCREMENT = "HOME_INCREMENT";
const DECREMENT = "HOME_DECREMENT";

// action-creator
export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}

// reducer
const initialState = {
  count: 0,
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }

    default:
      return state;
  }
}
