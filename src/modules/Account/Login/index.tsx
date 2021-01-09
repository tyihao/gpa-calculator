import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Input, Modal, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import styles from "./styles.less";

const { Title, Paragraph } = Typography;

export default () => {
  const [form] = Form.useForm();
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showRegister, setShowRegister] = useState<boolean>(false);
  const dispatch = useDispatch();

  const onSubmitLogin = () => {
    const { email, password } = form.getFieldsValue();
  };

  const onSubmitRegister = () => {
    const { email, password } = form.getFieldsValue();
  };

  return (
    <>
      <Button ghost className={styles.login} onClick={() => setShowLogin(true)}>
        Login / Register
      </Button>
      <Modal
        centered
        className={styles.modal}
        visible={showLogin}
        onOk={() => {
          setShowLogin(false);
          setShowRegister(false);
        }}
        onCancel={() => {
          setShowLogin(false);
          setShowRegister(false);
        }}
        width={300}
        footer={
          showRegister ? null : (
            <Paragraph className={styles.footer}>
              Not a member yet?
              {/*  eslint-disable-next-line */}
              <a onClick={() => setShowRegister(true)}> Sign up. </a>
            </Paragraph>
          )
        }
      >
        {showRegister ? (
          <>
            <Title level={4} className={styles.paragraph}>
              Register
            </Title>
            <Form form={form} className={styles.form}>
              <Form.Item
                name="E-mail Address"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                    type: "email",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className={styles.login} />}
                  placeholder="E-mail Address"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className={styles.login} />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item shouldUpdate={true}>
                {() => (
                  <Button
                    className={styles.loginFormButton}
                    htmlType="submit"
                    onClick={onSubmitRegister}
                  >
                    Register
                  </Button>
                )}
              </Form.Item>
            </Form>
          </>
        ) : (
          <>
            <Title level={4} className={styles.paragraph}>
              Login
            </Title>
            <Form form={form} className={styles.form}>
              <Form.Item
                name="E-mail Address"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                    type: "email",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className={styles.login} />}
                  placeholder="E-mail Address"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className={styles.login} />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item shouldUpdate={true}>
                {() => (
                  <Button
                    className={styles.loginFormButton}
                    htmlType="submit"
                    onClick={onSubmitLogin}
                  >
                    Log in
                  </Button>
                )}
              </Form.Item>
            </Form>
          </>
        )}
      </Modal>
    </>
  );
};
