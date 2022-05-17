import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const Home = () => {
    const { isLogIn } = useSelector((state => state.user));
    const { mainPosts } = useSelector((state => state.post));

    return (
        <div>
            <Head>
                <meta charSet='UTF-8'/>
                <title>Main : NordBird</title>
            </Head>
            <AppLayout>
                {isLogIn && <PostForm/>}
                {mainPosts.map((post, index) => <PostCard key={index} post={post} />)};
            </AppLayout>
        </div>
    );
}

export default Home;