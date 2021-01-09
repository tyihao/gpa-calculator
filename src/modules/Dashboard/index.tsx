import React, {ReactComponentElement, useState} from "react";
import Highcharts from "highcharts";
import HC_more from "highcharts/highcharts-more";
import styles from "./styles.less";
import {Button, Form, Input, Select, Typography} from "antd";
import {grades} from "./constants";
import Module from "./module";
import {ReactComponent} from "*.svg";
import {useSelector} from "react-redux";
import * as ScoreSelector from "@/feature/scores/selectors";

HC_more(Highcharts);

const {Title} = Typography;

export default () => {
    const [moduleCount, setModuleCount] = useState<any>(0);
    const modules = [
        ...Array(moduleCount),
    ].map((value: number, index: number) => (
        <Module value={index} />
    ));

    const totalGPA: any = Object.values(useSelector(ScoreSelector.cumulativeTotalGPA)).reduce((a: any, b: any) => a+b, 0);
    const totalCredits: any = Object.values(useSelector(ScoreSelector.totalCredits)).reduce((a: any, b: any) => a+b, 0);

    return (
        <>
            <div className={styles.homeBackground}/>
            <div className={styles.container}>
                <Title level={1} className={styles.text}>
                    GPA Calculator
                </Title>
                {modules}
                <Button className={styles.button} onClick={() => setModuleCount(moduleCount + 1)}> Add New Module </Button> <br/>
                Your CAP is: {totalGPA/totalCredits}
            </div>
        </>
    );
};
