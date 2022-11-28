// import { type } from "@testing-library/user-event/dist/type";
import React from "react";

type GreetProps = {
  name: string;
  message : number
};
const Greet = (props:GreetProps) => {
  return <div>{props.name} {props.message}</div>;
};

export default Greet;
