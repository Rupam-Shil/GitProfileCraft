/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import useUserGithubData from '@/store/useUserGithubData';
import { GithubFullResponse } from '@/types/github_user_response';
import React, { useEffect } from 'react';

function ProfilerData({ profileData }: { profileData: GithubFullResponse }) {
	const { setUserGithubData } = useUserGithubData((state) => ({
		setUserGithubData: state.setUserGithubData,
	}));

	useEffect(() => {
		setUserGithubData(profileData);
	}, [profileData]);
	return <div>ProfilerData</div>;
}

export default ProfilerData;
