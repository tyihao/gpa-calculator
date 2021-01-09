import React from "react";
import { Layout, Typography } from "antd";
import styles from "./styles.less";

const { Footer } = Layout;

export default () => {
  return (
    <Footer className={styles.container}>
      <Typography.Title className={styles.title}>
        Copyright © {getCopyrightYear()} GPA Calculator by 一起 Tech. All rights
        reserved.
      </Typography.Title>
    </Footer>
  );
};

function getCopyrightYear() {
  const currentYear = new Date().getFullYear();

  return currentYear === 2020 ? currentYear.toString() : `2020-${currentYear}`;
}
