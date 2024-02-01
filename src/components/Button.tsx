import React from "react";

interface Props {
  children: string;
  color: string;
  onClick: (e: any) => void;
}
const Button = ({ children, color, onClick }: Props) => {
  return (
    <button type="button" className={"m-2 btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
