import React from "react";
import styles from "./Hr.module.css";

type HrProps = {
  text?: string;
};

const Hr: React.FunctionComponent<HrProps> = ({ text }) => {
  return (
    <div
      className={`flex flex-row items-center justify-center mt-2 ${styles.hrEl}`}
    >
      <div
        className={`flex flex-row items-center justify-center${styles.inner}`}
      >
        {text}
      </div>
    </div>
  );
};

export default Hr;
