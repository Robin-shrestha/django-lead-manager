import {
  ON_ERROR,
  ON_LOADING,
  FETCH_DATA,
  ADD_DATA,
  DELETE_DATA,
} from "../reducers/BaseReducer";

export const OnLoading = () => {
  return {
    type: ON_LOADING,
  };
};

export const OnError = (error) => {
  return {
    type: ON_ERROR,
    payload: { error },
  };
};

export const FetchData = (data) => {
  return {
    type: FETCH_DATA,
    payload: { data },
  };
};

export const AddData = (data) => {
  return {
    type: ADD_DATA,
    payload: { data },
  };
};

export const DeleteData = (id) => {
  return {
    type: DELETE_DATA,
    payload: { id },
  };
};
