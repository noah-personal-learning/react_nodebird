import React, { useCallback, useState } from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';


import Password from 'antd/lib/input/Password';
import useInput from '../hooks/useInput';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

const ErrorMessage = styled.div`
    color:red;
`;

const SignUp = () => {

    const dispatch = useDispatch();
    const {signUpLoading} = useSelector((state) => state.user)
    
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    
    const [email, onChangeEmail] = useInput('');
    const [nickName, onChangeNick] = useInput('');
    const [password, onChangePassword] = useInput('');

    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback(
      (e) => {
        setTerm(e.target.checked);
        setTermError(false);
      },
      [],
    )

    const onChangePasswordCheck = useCallback(
        (e) => {
            setPasswordError(e.target.value !== password);
            setPasswordCheck(e.target.value);
        }, 
        [password]
    );


    const onSubmit = useCallback(
        () => {
            console.log(password + " : " + passwordCheck)

            if (password !== passwordCheck) {
                return setPasswordError(true);
            }
            if (!term) {
                return setTermError(true);
            }
        },
        [password, passwordCheck, term]
    );

    return (
        <AppLayout>
            <Head>
                <title>회원가입 | NordBird</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label name="user-email">아이디</label>
                    <br/>
                    <Input name="user-email" type="email" value={email} required onChange={onChangeEmail} />
                    <label name="user-nick">닉네임</label>
                    <br/>
                    <Input name="user-nick" value={nickName} required onChange={onChangeNick} />
                    <label name="user-password">비밀번호</label>
                    <br/>
                    <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
                    <label name="user-password-check">비밀번호체크</label>
                    <br/>
                    <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} />
                    {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
                </div>
                <div>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>노아 말을 잘 들을 것을 동의 합니다.</Checkbox>
                    {termError && <ErrorMessage>약관에 동의하지 않았습니다.</ErrorMessage>}
                </div>
                <div>
                    <Button type='primary' htmlType='submit' loading='signUpLoading'></Button>
                        가입하기
                    </Button>
                </div>
            </Form>
            
        </AppLayout>
    );
}

export default SignUp;