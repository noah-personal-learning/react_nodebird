import { Form, Input, Button } from 'antd';
import React, { useCallback, useState } from 'react'
import Link from 'next/link';
import styled from 'styled-components';

// 회원가입 라이브러리 폼 존재 추후에 적용하면 좋을 것 으로 보임.
const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    // useCallBack : 컴포넌트 안에서 적용되는 함수는 useCallback을 사용한다.
    const onChangeId = useCallback((e) => {
        setId(e.target.value)
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value)
    }, []);


    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        setIsLoggedIn(true);
    }, [id, password]);

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input 
                    name="user-id" 
                    value={id} 
                    onChange={onChangeId} 
                    required
                />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input 
                    name="user-password" 
                    type="password"
                    value={password} 
                    onChange={onChangePassword} 
                    required
                />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
            <div>
            </div>
            <div>
            </div>
        </FormWrapper>
    );
};

export default LoginForm;