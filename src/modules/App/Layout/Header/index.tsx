import React from "react";
import { Col, Layout, Menu, Row } from "antd";
import { Link } from "react-router-dom";
import styles from "./styles.less";
import Login from "@/modules/Account/Login/index";
import Profile from "@/modules/Account/Profile/index";

import {
  BarChartOutlined,
  ContactsOutlined,
  HomeOutlined,
} from "@ant-design/icons/lib";

import { useSelector } from "react-redux";
import { RootState } from "@/feature/rootState";

const { Header } = Layout;

export default () => {
  return (
    <Header className={styles.header}>
      <div className="logo" />
      <Row justify={"space-between"}>
        <Col xs={14} sm={20}>
          <Menu
            className={styles.header}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["/"]}
          >
            <Menu.Item key="/" className={styles.menuItem}>
              <Link to="/">
                <HomeOutlined className={styles.icon} />
                <span className={styles.iconOnly}>Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/dashboard" className={styles.menuItem}>
              <Link to="/dashboard">
                <BarChartOutlined className={styles.icon} />
                <span className={styles.iconOnly}>Dashboard</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};
