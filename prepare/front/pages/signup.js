import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const SignUp = () => {
    return (
        <div>
            <Head>
                <meta charSet='UTF-8'/>
                <title>회원가입 : NordBird</title>
            </Head>
            <AppLayout>
                <div>회원가입</div> 
            </AppLayout>
        </div>
    );
}

export default SignUp;