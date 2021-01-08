import React from "react";
import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./styles.less";

export default () => {
  return (
    <>
      <Button ghost className={styles.profile} onClick={() => {}}>
        Profile
      </Button>
    </>
  );
};
