import React from "react";
import styles from "./bubble.module.css";


export default function BubbleText () {
  return (
    <h2 className="text-center text-5xl font-thin text-indigo-300">
      {"Jacob Cadavez".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};