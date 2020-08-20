import React from "react";
import AddForm from "./AddForm";
import LeadList from "./LeadList";

const DisplayBoard = () => {
  return (
    <div className="container">
      <AddForm />
      <LeadList />
    </div>
  );
};

export default DisplayBoard;
