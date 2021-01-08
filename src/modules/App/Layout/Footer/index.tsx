import React from "react";
import { Layout, Typography } from "antd";
import styles from "./styles.less";

const { Footer } = Layout;

export default () => {
  return (
    <Footer className={styles.container}>
      <Typography.Title className={styles.title}>
        Copyright © {getCopyrightYear()} Career Pace by WXYZ Tech. All rights
        reserved.
      </Typography.Title>
    </Footer>
  );
};

function getCopyrightYear() {
  const currentYear = new Date().getFullYear();

  return currentYear === 2020 ? currentYear.toString() : `2020-${currentYear}`;
}
