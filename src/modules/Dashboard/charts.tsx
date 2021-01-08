import React from "react";
import styles from "./styles.less";
import { Col, Row, Typography } from "antd";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { mock_data } from "./constants";

const { Title } = Typography;

export default () => {
  const jobs = Object.keys(mock_data);
  let counter = 1;

  return (
    <>
      {jobs.map((job: string) => (
        <>
          <Title level={3} className={styles.jobText}>
            {counter++}. {job}
          </Title>
          <Row gutter={[10, 10]} justify={"space-around"}>
            <Col>
              <HighchartsReact
                highcharts={Highcharts}
                options={{
                  chart: {
                    type: "bar",
                    backgroundColor: "transparent",
                  },
                  colors: ["#50b65a", "#ba3939"],

                  credits: {
                    enabled: false,
                  },

                  title: {
                    text: "Top 10 Skills for " + job,
                    style: {
                      color: "#ffffff",
                    },
                  },
                  xAxis: {
                    categories: mock_data[job]["top_10_skills"].reduce(
                      (e: any, i: any) => e.concat(i.name),
                      []
                    ),
                    labels: {
                      format: "{value}",
                    },
                  },
                  legend: {
                    layout: "vertical",
                    align: "right",
                    verticalAlign: "bottom",
                    x: -40,
                    y: 80,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: "#fff",
                    shadow: true,
                  },
                  plotOptions: {
                    series: {
                      label: {
                        enabled: true,
                      },
                      dataLabels: {
                        enabled: true,
                        inside: true,
                        format: "{name}",
                      },
                    },
                  },
                  series: [
                    {
                      data: [
                        {
                          name: "Python",
                          color: "#50b65a",
                          y: 94,
                        },
                        {
                          name: "Jupyter",
                          color: "#50b65a",
                          y: 88,
                        },
                        {
                          name: "Jupyter",
                          color: "#ba3939",
                          y: 84,
                        },
                        {
                          name: "Jupyter",
                          color: "#50b65a",
                          y: 79,
                        },
                        {
                          name: "Jupyter",
                          color: "#ba3939",
                          y: 76,
                        },
                        {
                          name: "Jupyter",
                          color: "#50b65a",
                          y: 73,
                        },
                        {
                          name: "Jupyter",
                          color: "#ba3939",
                          y: 68,
                        },
                        {
                          name: "Jupyter",
                          color: "#50b65a",
                          y: 64,
                        },
                        {
                          name: "Jupyter",
                          color: "#ba3939",
                          y: 60,
                        },
                      ],
                    },
                  ],
                }}
              />
            </Col>
            <Col>
              <HighchartsReact
                highcharts={Highcharts}
                options={{
                  chart: {
                    polar: true,
                    backgroundColor: "transparent",
                  },

                  colors: ["#941941", "#123243"],

                  credits: {
                    enabled: false,
                  },
                  title: {
                    text: job,
                    style: {
                      color: "#ffffff",
                    },
                  },
                  subtitle: {
                    text: "Relevance Chart",
                  },

                  pane: {
                    startAngle: 0,
                    endAngle: 360,
                  },

                  xAxis: {
                    tickInterval: 45,
                    min: 0,
                    max: 360,
                    labels: {
                      format: "{value}°",
                    },
                  },

                  yAxis: {
                    min: 0,
                  },

                  plotOptions: {
                    series: {
                      pointStart: 0,
                      pointInterval: 45,
                    },
                    column: {
                      pointPadding: 0,
                      groupPadding: 0,
                    },
                  },

                  series: [
                    {
                      type: "area",
                      name: "Score",
                      data: [1, 8, 2, 7, 3, 6, 4, 5],
                    },
                  ],
                }}
              />
            </Col>
          </Row>
        </>
      ))}
    </>
  );
};
