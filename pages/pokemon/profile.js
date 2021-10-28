import React from 'react';
import Head from 'next/head';
import ProfileContainer from '../../containers/ProfileContainer';

const ProfilePage = () => (
  <>
    <Head>
      <title>Pokemon Collection | Profile</title>
    </Head>
    <ProfileContainer />
  </>
);

export default ProfilePage;
