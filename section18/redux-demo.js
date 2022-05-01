const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment")
    return {
      counter: state.counter + 1,
    };
  if (action.type === "decrement")
    return {
      counter: state.counter - 1,
    };
  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState(); //get state will give us the latest state snapshot after it was updated
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
