import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Home = () => {
    return (
        <div>
            <Head>
                <meta charSet='UTF-8'/>
                <title>Main : NordBird</title>
            </Head>
            <AppLayout>
            <div>Hello, Next JS</div>
            </AppLayout>
        </div>
    );
}

export default Home;