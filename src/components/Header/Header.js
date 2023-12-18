import React from "react";
import { HeaderItem } from "../HeaderItem/HeaderItem";
import styles from "./Header.module.css";
import contentInfo from "../contentInfo.json";

export const Header = ({ currentCategory, onCategoryChange }) => {
  const handleCategoryClick = (category) => {
    onCategoryChange(category);
  };

  return (
    <header className={styles.root}>
      {Object.keys(contentInfo).map((category) => (
        <HeaderItem
          key={category}
          isActive={currentCategory === category}
          text={category}
          onClick={() => handleCategoryClick(category)}
        />
      ))}
    </header>
  );
};
