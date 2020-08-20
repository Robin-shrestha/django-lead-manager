import React from "react";
import axios from "axios";
import { DeleteData } from "../../actions";
import { useDispatch } from "react-redux";

const Delete = ({ id }) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(DeleteData(id));
    axios
      .delete(`/api/leads/${id}/`)
      .then((res) => console.log("deleted"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button
        onClick={deleteHandler}
        className="btn btn-danger btn-outline-danger text-light"
      >
        Delete
      </button>
    </div>
  );
};

export default Delete;
