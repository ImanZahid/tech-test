import React, { useState } from "react";
import { Header } from "../Header/Header";
import { Content } from "../Content/Content";
import styles from "./Banner.module.css";
import contentInfo from "../contentInfo.json";

export const Banner = () => {
  const [currentCategory, setCurrentCategory] = useState(Object.keys(contentInfo)[0]);

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  return (
    <div className={styles.root}>
      <Header currentCategory={currentCategory} onCategoryChange={handleCategoryChange} />
      <Content currentCategory={currentCategory} data={contentInfo} />
    </div>
  );
};
