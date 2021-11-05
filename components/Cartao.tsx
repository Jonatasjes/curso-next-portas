import { ReactNode } from "react";
import styles from "../styles/Cartao.module.css";

interface CartaoProps {
  children?: ReactNode;
  bgcolor?: string;
}

export default function Cartao(props: CartaoProps) {
  return (
    <div
      className={styles.cartao}
      style={{
        backgroundColor: props.bgcolor ?? "#fff",
      }}
    >
      {props.children}
    </div>
  );
}
