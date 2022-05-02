import React, { useCallback, useState } from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form, Input } from 'antd';
import Password from 'antd/lib/input/Password';

const SignUp = () => {

    const [id, setId] = useState('');
    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    });

    const [password, setPassword] = useState('');
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    });

    const [passwordCheck, setPasswordCheck] = useState('');
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
    });

    const [nickName, setNickname] = useState('');
    const onChangeNick = useCallback((e) => {
        setNickname(e.target.value);
    });

    const onSubmit = useCallback((e) => {

    }, []);

    return (
        <AppLayout>
            <Head>
                <title>회원가입 | NordBird</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label name="user-id">아이디</label>
                    <br/>
                    <Input name="user-id" value={id} required onChange={onChangeId} />
                    <label name="user-nick">닉네임</label>
                    <br/>
                    <Input name="user-nick" value={nickName} required onChange={onChangeNick} />
                    <label name="user-password">비밀번호</label>
                    <br/>
                    <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
                    <label name="user-password-check">비밀번호체크</label>
                    <br/>
                    <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} />
                </div>
            </Form>
            
        </AppLayout>
    );
}

export default SignUp;