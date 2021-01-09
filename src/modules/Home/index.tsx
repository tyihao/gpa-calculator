import React, {useState} from "react";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import {options} from "./constants";
import {Button, Col, Divider, Row, Typography} from "antd";
import styles from "./styles.less";

import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const {Paragraph, Title} = Typography;


export default () => {
    const dispatch = useDispatch();

    return (
        <>
            <div className={styles.homeBackground}/>
            <div className={styles.container}>
                <div className={styles.body}>
                    <Row justify={"center"}>
                        <Col span={12}>
                            <Paragraph className={styles.title}>Welcome to GPA Calculator </Paragraph>
                        </Col>
                    </Row>
                    <Row justify={"center"}>
                        <Col span={8}>
                            <Divider className={styles.divider}/>
                        </Col>
                    </Row>
                    <Row justify={"center"}>
                        <Col span={12}>
                            <Title className={styles.text}>
                                Helping you calculate your GPA path in your university life.
                            </Title>
                        </Col>
                    </Row>
                </div>
                <Row justify={"center"} className={styles.creatableSelect}>
                    <Col span={4}>
                        <Button
                            className={styles.submitButton}
                            ghost
                        >
                            <Link to={"/dashboard"}> Get Started </Link>
                        </Button>
                    </Col>
                </Row>
            </div>
        </>
    );
};
