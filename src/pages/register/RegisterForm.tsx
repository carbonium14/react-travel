import React from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import styles from './RegisterForm.module.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const RegisterForm: React.FC = () => {
    const navigate = useNavigate()
    const onFinish = async (values: any) => {
        try {
            await axios.post('http://123.56.149.216:8080/auth/register', {
                email: values.username,
                password: values.password,
                confirmPassword: values.confirmpassword
            })
            navigate('/signIn/')
        } catch (error) {
            alert('注册失败!')
        }
    };
    const onFinishFailed = (errorInfo: any) => {
      alert(errorInfo);
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
          className={styles["register-form"]}
        >
          <Form.Item
            label="用户名"
            name="username"
            hasFeedback
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="密码"
            name="password"
            hasFeedback
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="确认密码"
            name="confirmpassword"
            hasFeedback
            rules={[
                { required: true, message: '请输入确认密码' },
                (({getFieldValue}) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve()
                        }
                        return Promise.reject('两次输入的密码不一致')
                    },
                }))
            ]}
          >
            <Input.Password />
          </Form.Item>
    
          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>记住我</Checkbox>
          </Form.Item>
    
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
    );
}