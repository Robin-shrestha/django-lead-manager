import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AddData } from "../../actions";

const AddForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("submit");
    axios
      .post("/api/leads/", { name: name, email: email, message: message })
      .then((res) => {
        dispatch(AddData(res.data));
      });
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div>
      <h3>ADD LEADS:</h3>
      <form onSubmit={(e) => onSubmit(e)}>
        <div class="form-group">
          <input
            placeholder="name"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div class="form-group">
          <input
            placeholder="email"
            type="email"
            value={email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="message"
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></input>
          <input type="submit" value="submit" class="btn btn-primary mt-3" />
        </div>
      </form>
    </div>
  );
};

export default AddForm;
