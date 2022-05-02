import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {

    const followerList  = [{nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}];
    const followingList = [{nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}];

    return (
        <div>
            <Head>
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