import React from "react";
import Highcharts from "highcharts";
import HC_more from "highcharts/highcharts-more";
import styles from "./styles.less";
import { Typography } from "antd";
import { useSelector } from "react-redux";
import { OptSel } from "@/feature/optimise";
import Charts from "./charts";

HC_more(Highcharts);

const { Title, Paragraph } = Typography;

export default () => {
  const skills = useSelector(OptSel.skills);
  return (
    <>
      <div className={styles.homeBackground} />
      <div className={styles.container}>
        <Title level={1} className={styles.text}>
          Here are your possible job options
        </Title>
        <Paragraph className={styles.text}>
          {skills.map((skill: string) => (
            <div className={styles.textBubble}> {skill} </div>
          ))}
        </Paragraph>
        <Charts />
      </div>
    </>
  );
};
