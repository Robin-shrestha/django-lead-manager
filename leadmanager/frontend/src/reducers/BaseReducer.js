const initialState = {
  isLoading: false,
  data: [],
  error: "",
};
export const ON_LOADING = "ON_LOADING";
export const FETCH_DATA = "FETCH_DATA";
export const ON_ERROR = "ON_ERROR";
export const ADD_DATA = "ADD_DATA";
export const DELETE_DATA = "DELETE_DATA";

const BaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_LOADING:
      return { ...state, isLoading: true };
    case ON_ERROR:
      return { isLoading: false, data: [], error: action.payload.error };
    case FETCH_DATA:
      return { isLoading: false, data: action.payload.data, error: "" };
    case ADD_DATA:
      return { ...state, data: [...state.data, action.payload.data] };
    case DELETE_DATA:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};
export default BaseReducer;
