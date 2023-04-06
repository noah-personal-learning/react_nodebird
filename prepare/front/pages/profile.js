import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {

    // const followerList  = [{nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}];
    // const followingList = [{nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}, {nickName : 'Noah'}];
    const { me } = useSelector((state) => state.user);


    return (
        <div>
            <Head>
                <title>내 프로필 : NordBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm/>
                <FollowList header="팔로잉" data={me.Followings} />
                <FollowList header="팔로워" data={me.Followers} />
            </AppLayout>
        </div>
    );
}

export default Profile;