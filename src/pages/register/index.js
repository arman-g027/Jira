import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { Form, Button, Input, notification } from 'antd'
import { auth } from '../../services/firebase';
import { regexpValidation } from "../../core/utils/constants";

import './index.css';


const Register = () => {
    const [loading, setLoading] = useState(false);

    const [form] = Form.useForm();

    const handleRegister = async values => {
        setLoading(true);
        const { email, password } = values;
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="auth_container">
            <Form layout="vertical" form={form} onFinish={handleRegister}>

                <Form.Item
                    label='First Name'
                    name='firis_name'
                    rules={[
                        {
                            required: true,
                            message: "Please input you'r First Name!"
                        }
                    ]}
                >
                    <Input type="text" placeholder="First Name" />
                </Form.Item>

                <Form.Item
                    label='Last Name'
                    name='last_name'
                    rules={[
                        {
                            required: true,
                            message: "Please input you'r Last Name!"
                        }
                    ]}>
                    <Input type="text" placeholder="Last Name" />
                </Form.Item>

                <Form.Item
                    label='Email'
                    name='email'
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
                    label='Password'
                    name='password'
                    rules={[
                        {
                            required: true,
                            message: "Please input you'r password!"
                        },
                        {
                            pattern: regexpValidation,
                            message: 'Wrong password'
                        }
                    ]}
                >
                    <Input type="password" placeholder="Password" />
                </Form.Item>

                <Button type="primary" htmlType="submit" loading={loading}>
                    Sign up
                </Button>

            </Form>
        </div>
    )


}



export default Register;