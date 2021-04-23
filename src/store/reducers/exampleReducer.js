import initialState from "../initialState";

const exampleData = function (state = initialState.exampleData, action) {
  if (action.type === "UPDATE_EXAMPLE_DATA") {
    return {
      ...state,
      ...action.payload,
    };
  }
  return state;
};

export default exampleData;
