import React, {useState} from "react";
import {Form, Input, Select, Typography} from "antd";
import {grades} from "@/modules/Dashboard/constants";
import styles from "./styles.less";
import {useDispatch} from "react-redux";
import {updateGPA, updateCredits} from "@/feature/scores/actions";

const {Option} = Select;

export default (value: any) => {
    const dispatch = useDispatch();
    const [credits, setCredits] = useState(0);
    const [gpa, setGPA] = useState(0);
    console.log(gpa);
    return (
        <>
            <Form layout="inline">
                <Form.Item label="Module Name" required tooltip="This is a required field">
                    <Input className={styles.input} placeholder="Module Name"/>
                </Form.Item>
                <Form.Item label="Credit" required tooltip="This is a required field">
                    <Input className={styles.input} onChange={(e: any) => {
                        dispatch(updateCredits([value.value, parseInt(e.target.value)]));
                        setCredits(parseInt(e.target.value));
                        dispatch(updateGPA([value.value, parseInt(e.target.value) * gpa]));
                    }}/>
                </Form.Item>
                <Form.Item label="Grade" required tooltip="This is a required field">
                    <Select defaultValue={"-"} style={{width: 80}} onChange={(e: any) => {
                        dispatch(updateGPA([value.value, credits * e]));
                        setGPA(credits === 0 ? e : credits * e);
                    }}>
                        {Object.keys(grades).map((e: string) => <Option value={grades[e]}> {e} </Option>)}
                    </Select>
                </Form.Item>
            </Form>
        </>
    );
}
