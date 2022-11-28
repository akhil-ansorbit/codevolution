import React from "react";

type personListProps = {
  name: {
    first: string;
    age: number;
  }[];
};
const PersonList = (props: personListProps) => {
  return (
    <div>
      {props.name.map((val) => {
        return (
          <div>
            {val.first} {val.age}
          </div>
        );
      })}
    </div>
  );
};

export default PersonList;
