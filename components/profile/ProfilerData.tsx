/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import useUserGithubData from '@/store/useUserGithubData';
import { GithubFullResponse } from '@/types/github_user_response';
import React, { useEffect } from 'react';
import styles from './profile.module.scss';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import ProfileMarkdown from './ProfileMarkdown';
import { useRouter } from 'next/navigation';

function ProfilerData({ profileData }: { profileData: GithubFullResponse }) {
	const { setUserGithubData, getMarkdown } = useUserGithubData((state) => ({
		setUserGithubData: state.setUserGithubData,
		getMarkdown: state.getMarkdown,
	}));
	const router = useRouter();

	useEffect(() => {
		setUserGithubData(profileData);
	}, [profileData]);
	return (
		<div className={`square-bg ${styles.profile}`}>
			<div className={styles.details}>
				<p className={styles.heading}>
					Here is your new <span>Awesome Github Profile</span>
				</p>
				<p className={styles.subheading}>
					Set yourself apart from everyone else with this creative profile
					README
				</p>
				<PrimaryButton
					onClick={() => navigator.clipboard.writeText(getMarkdown())}
				>
					Copy Markdown! 😃
				</PrimaryButton>
				<div className={styles['gap-2']}></div>
				<p className={styles.subheading}>Want some modifications on this?</p>
				<SecondaryButton onClick={() => router.push('/create-profile')}>
					Let&apos;s Customize! 🖌️
				</SecondaryButton>
			</div>
			<div className={styles.main}>
				<ProfileMarkdown />
			</div>
		</div>
	);
}

export default ProfilerData;
