import React from "react";
import styles from './SigninForm.module.css'
import { Button, Checkbox, Form, Input } from 'antd';
import { signIn } from "../../redux/user/slice";
import { useSelector, useAppDispatch } from "../../redux/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const SigninForm:React.FC= () => {
    const loading = useSelector(state => state.user.loading)
    const error = useSelector(state => state.user.error)
    const jwt = useSelector(state => state.user.token)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (jwt !== null) {
            navigate('/')
        }
    }, [jwt, navigate])
    const onFinish = (values: any) => {
        dispatch(signIn({
            email: values.username,
            password: values.password
        }))
    };
    const onFinishFailed = (errorInfo: any) => {
        alert(errorInfo + error);
    };
    return (
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className={styles["login-form"]}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>
    
          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>记住我</Checkbox>
          </Form.Item>
    
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              提交
            </Button>
          </Form.Item>
        </Form>
    );
}