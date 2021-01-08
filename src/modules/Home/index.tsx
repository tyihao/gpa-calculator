import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import { options } from "./constants";
import { Button, Card, Col, Divider, Row, Typography } from "antd";
import styles from "./styles.less";
import Universe from "@/resources/universe.svg";
import Information from "@/resources/information.svg";
import Powerful from "@/resources/powerful.svg";
import MotionGif from "@/resources/careerpace-darken.svg";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { OptAction } from "@/feature/optimise";

const { Paragraph, Title } = Typography;

const animatedComponents = makeAnimated();

export default () => {
  const [skills, setSkills] = useState<any>([]);
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.homeBackground} />
      <div className={styles.container}>
        <div className={styles.body}>
          <Row justify={"center"}>
            <Col span={12}>
              <Paragraph className={styles.title}>Welcome to </Paragraph>
            </Col>
          </Row>
          <img src={MotionGif} className={styles.headerImg} alt='motion gif'/>
          <Row justify={"center"}>
            <Col span={8}>
              <Divider className={styles.divider} />
            </Col>
          </Row>
          <Row justify={"center"}>
            <Col span={12}>
              <Title className={styles.text}>
                Bringing you closer to your dream job. Start by entering your
                key skills.
              </Title>
            </Col>
          </Row>
        </div>
        <Row justify={"center"} className={styles.creatableSelect}>
          <Col xs={14} sm={8} offset={2}>
            <CreatableSelect
              components={animatedComponents}
              isMulti
              isClearable
              options={options}
              onChange={(e) => setSkills(e ? e.map((i: any) => i.label) : e)}
            />
          </Col>
          <Col span={4}>
            <Button
              className={styles.submitButton}
              ghost
              onClick={() => dispatch(OptAction.updateSkills(skills))}
            >
              <Link to={"/dashboard"}> Submit </Link>
            </Button>
          </Col>
        </Row>
      </div>
      <Card className={styles.card}>
        <Title className={styles.title}> Why CareerPace? </Title>
        <Row gutter={[60, 100]} justify={"center"}>
          <Col sm={8} xs={24}>
            <Title> Dashboard </Title>
            <Paragraph>
              The company said in a news release that key to this is the
              creation of a new portfolio under its Group Enterprise division,
              dedicated to driving 5G Enterprise business across the region by
              "leveraging the group's regional footprint". "The move to help
              businesses accelerate their digital transformation comes as
              companies embrace new business models and race to go digital in
              response to COVID-19 and the resulting changes that travel
              restrictions and lockdowns have had on the broader business
              landscape," said Singtel.
            </Paragraph>
          </Col>
          <Col span={8}>
            <span className={styles.iconOnly}>
              <img src={Information} className={styles.infoImg} alt='information'/>
            </span>
          </Col>
        </Row>
        <Row gutter={[60, 100]} justify={"center"}>
          <Col sm={8} xs={24}>
            <Title> Universe of Data </Title>
            <Paragraph>
              Singtel’s information and communications technology (ICT) arm NCS
              will operate as an autonomous business unit, reporting directly to
              the Group CEO to accelerate its expansion into Asia Pacific, with
              special focus on Australia and China. These changes will take
              effect from Jan 1, 2021, said the telco. “5G is going to be more
              than just a connectivity play for us and this refocus of the
              business will allow us to go after the digital growth that 5G will
              fuel as a plethora of use cases and business models emerge," said
              Singtel Group CEO-designate Yuen Kuan Moon.
            </Paragraph>
          </Col>
          <Col span={8}>
            <span className={styles.iconOnly}>
              <img src={Universe} className={styles.infoImg} alt='information'/>
            </span>
          </Col>
        </Row>
        <Row gutter={[60, 100]} justify={"center"}>
          <Col sm={8} xs={24}>
            <Title> Powerful </Title>
            <Paragraph>
              "With COVID-19 also changing the game for companies, we see this
              as an opportune time to reset our business and prioritise areas
              where we see the greatest opportunities for growth by leveraging
              our extensive footprint across Asia." Mr Yuen said that the
              greater autonomy would help NCS maximise its potential by
              expanding its footprint beyond Singapore to build a strategic
              presence in major markets for digital transformation. This is part
              of a longer-term plan to turn NCS into a leading regional
              business-to-business digital services company, he said.
            </Paragraph>
          </Col>
          <Col span={8}>
            <span className={styles.iconOnly}>
              <img src={Powerful} className={styles.infoImg} alt='information'/>
            </span>
          </Col>
        </Row>
      </Card>
    </>
  );
};
