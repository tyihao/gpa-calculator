import React, { FC } from "react";
import { Layout } from "antd";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./styles.less";
// @ts-ignore
import Music from "@/resources/music.mp3";

const { Content } = Layout;

const AppLayout: FC = ({ children }) => {
  return (
    <Layout className={styles.layout}>
      <Header />
      {/* Uncomment for some magic*/}
      {/*<audio controls autoPlay>*/}
      {/*  <source src={Music} type="audio/mpeg"></source>*/}
      {/*</audio>*/}
      <Content className={styles.content}>
        <main className={styles.body}> {children} </main>
      </Content>
      <Footer />
    </Layout>
  );
};

export default AppLayout;
