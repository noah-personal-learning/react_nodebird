import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Profile = () => {
    return (
        <div>
            <Head>
                <meta charSet='UTF-8'/>
                <title>내 정보 : NordBird</title>
            </Head>
            <AppLayout>
                <div>내 정보</div> 
            </AppLayout>
        </div>
    );
}

export default Profile;