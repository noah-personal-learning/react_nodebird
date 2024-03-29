import { Form, Input, Button } from 'antd';
import React, { useCallback } from 'react'
import Link from 'next/link';
import styled from 'styled-components';

import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../reducers/user';

// 회원가입 라이브러리 폼 존재 추후에 적용하면 좋을 것 으로 보임.
const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LoginForm = () => {

    const dispatch = useDispatch();
    const { logInLoading } = useSelector((state) => state.user)
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmitForm = useCallback(() => {
        console.log(email, password);
        dispatch(loginRequestAction({ email, password }));
    }, [email, password]);

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-email">이메일</label>
                <br />
                <Input 
                    name="user-email" 
                    value={email} 
                    onChange={onChangeEmail} 
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
                <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
};

export default LoginForm;

// const [id, setId] = useState('');
// // useCallBack : 컴포넌트 안에서 적용되는 함수는 useCallback을 사용한다.
// const onChangeId = useCallback((e) => {
//     setId(e.target.value)
// }, []);

// 자주 반복되는 모듈들을 커스텀 훅을 사용하여 해결 가능.
// const [password, setPassword] = useState('');
// const onChangePassword = useCallback((e) => {
//     setPassword(e.target.value)
// }, []);