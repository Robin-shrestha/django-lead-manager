import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { OnError, OnLoading, FetchData } from "../../actions";

const LeadList = () => {
  const leadState = useSelector((state) => state.BaseReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(OnLoading());
    axios
      .get("/api/laeaads", {
        params: {
          format: "json",
        },
      })
      .then((res) => {
        dispatch(FetchData(res.data));
      })
      .catch((err) => {
        dispatch(OnError(err.message));
      });
  }, []);
  return (
    <div>
      <div>{leadState.isLoading ? <p>...LOADING</p> : null}</div>
      <div>{leadState.error ? <p>{leadState.error}</p> : null}</div>
      <ul>
        {leadState.data.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>{item.email}</span>
              <span>{item.message}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeadList;
