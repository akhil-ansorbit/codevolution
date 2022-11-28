import { type } from "os";
import React from "react";
type StatusType = {
  status: "loading" | "success" | "error";
};
const Status = (props: StatusType) => {
    let message;
    if (props.status === "loading"){
        message = "Loading..."
    }else if (props.status === "success") {
        message = "Success"
    }else if (props.status === "error") {
        message = "Error 404"
    }
  return <div>status - {message}</div>;
};

export default Status;
