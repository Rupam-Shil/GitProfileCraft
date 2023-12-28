'use client';
import React from 'react';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import useUserSearch from '@/store/useUserSearch';
import { useRouter } from 'next/navigation';

function HeroButton() {
	const { userName } = useUserSearch((state) => ({
		userName: state.userName,
	}));
	const router = useRouter();
	const handleGenerateProfile = () => {
		if (userName) {
			router.push(`/profile/${userName}`);
		}
	};
	return (
		<>
			<PrimaryButton onClick={handleGenerateProfile}>
				Generate Profile
			</PrimaryButton>
			<SecondaryButton>Create Your Own</SecondaryButton>
		</>
	);
}

export default HeroButton;
