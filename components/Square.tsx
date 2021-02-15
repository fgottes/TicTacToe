import { ReactNode } from "react";
import styles from "../styles/Square.module.css";

type Props = {
  value: ReactNode;
};
export default function Square(props: Props) {
  return (
    <button
      className="square"
      onClick={function () {
        alert("click");
      }}
    >
      {props.value}
    </button>
  );
}
