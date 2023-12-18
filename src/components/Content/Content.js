import React from "react";
import { ContentItem } from "../ContentItem/ContentItem";
import styles from "./Content.module.css";

export const Content = ({ currentCategory, data }) => {
  const categoryData = data[currentCategory] || [];

  return (
    <div className={styles.root}>
      <h2>{currentCategory}</h2>
      <div className={styles.ContentItemHolder}>
        {categoryData.map((item, index) => (
          <ContentItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
