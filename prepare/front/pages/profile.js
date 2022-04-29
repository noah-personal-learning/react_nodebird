import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {

    const followerList  = [{nickname : 'A'}, {nickname : 'B'}, {nickname : 'C'}];
    const followingList = [{nickname : 'D'}, {nickname : 'E'}, {nickname : 'F'}];

    return (
        <div>
            <Head>
                <meta charSet='UTF-8'/>
                <title>내 프로필 : NordBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm/>
                <FollowList header="팔로잉 목록" data={followingList} />
                <FollowList header="팔로워 목록" data={followerList} />
            </AppLayout>
        </div>
    );
}

export default Profile;