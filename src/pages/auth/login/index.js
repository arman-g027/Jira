import { useState } from 'react';
import { Form, Input, Button, notification } from 'antd';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../services/firebase';

import { regexpValidation, ROUTE_CONSTANTS } from '../../../core/utils/constants';
import AuthWrapper from '../../../components/sheard/AuthWrapper';
import loginBanner from '../../../core/images/auth-login.jpg';

import { Link } from 'react-router-dom';

const Login = (setIsAuth) => {
    const [loading, setLoading] = useState(false);

    const [form] = Form.useForm();

    const handleLogin = async values => {
        setLoading(true);
        try {
            const { email, password } = values;
            const response = await signInWithEmailAndPassword(auth, email, password);
            form.resetFields();
            setIsAuth(true);

        } catch (error) {
            notification.error({
                message: 'Invalid Login Credentials',
                description: ''
            })
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthWrapper title='Sign in' banner={loginBanner}>
            <Form layout="vertical" form={form} onFinish={handleLogin}>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input you'r email!"
                        }
                    ]}
                >
                    <Input type="email" placeholder="Email" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input you'r password!"
                        }
                    ]}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>

                <Button type="primary" htmlType="submit" loading={loading}>
                    Sign in
                </Button>
                <Link to={ROUTE_CONSTANTS.REGISTER}>Create Account</Link>
            </Form>
        </AuthWrapper>
    )
}


export default Login;