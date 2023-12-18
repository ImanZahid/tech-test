import React from "react";
import styles from "./HeaderItem.module.css";
import clsx from "clsx";

export const HeaderItem = ({ text, onClick, isActive }) => {
  return (
    <button className={clsx(styles.root, isActive && styles.active)} onClick={onClick}>
      {text}
    </button>
  );
};
