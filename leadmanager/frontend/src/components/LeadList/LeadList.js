import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { OnError, OnLoading, FetchData } from "../../actions";
import Delete from "./Delete";

const LeadList = () => {
  const leadState = useSelector((state) => state.BaseReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(OnLoading());
    axios
      .get("/api/leads", {
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
      <div>
        <div>{leadState.isLoading ? <p>...LOADING</p> : null}</div>
        <div>{leadState.error ? <p>{leadState.error}</p> : null}</div>
      </div>

      <div>
        <table className="table mt-4">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Message</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {leadState.data.map((item) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{item.name}</th>
                  <td>{item.email}</td>
                  <td>{item.message}</td>
                  <td>
                    <Delete id={item.id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadList;
