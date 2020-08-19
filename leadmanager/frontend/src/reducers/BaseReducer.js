const initialState = {
  isLoading: false,
  data: [],
  error: "",
};
export const ON_LOADING = "ON_LOADING";
export const FETCH_DATA = "FETCH_DATA";
export const ON_ERROR = "ON_ERROR";

const BaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_LOADING:
      return { ...state, isLoading: true };
    case ON_ERROR:
      return { isLoading: false, data: [], error: action.payload.error };
    case FETCH_DATA:
      return { isLoading: false, data: action.payload.data, error: "" };
    default:
      return state;
  }
};
export default BaseReducer;
