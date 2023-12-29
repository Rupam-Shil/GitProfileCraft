import ProfilerData from '@/components/profile/ProfilerData';
import { ApiResult } from '@/types/api_result';
import {
	GithubFullResponse,
	GithubUserDetails,
} from '@/types/github_user_response';
import { redirect } from 'next/navigation';
import Loading from './loading';

export default async function Page({
	params,
}: {
	params: { userName: string };
}) {
	if (params.userName == '') {
		redirect('/');
	}
	const userData = await fetchUserGithubData<GithubFullResponse>(
		params.userName
	);
	if (!userData.data) {
		throw new Error('User not found');
	}
	return <ProfilerData profileData={userData.data} />;
}

const fetchUserGithubData = async <T,>(
	userName: string
): Promise<ApiResult<T>> => {
	const userData = await fetchUserDetails<GithubUserDetails>(userName);
	if (!userData.success) {
		throw new Error(userData.error);
	}
	if (!userData.data?.repos_url) {
		return {
			success: true,
			data: { ...userData.data, skills: [] },
		} as ApiResult<T>;
	}
	const userRepoData = await fetchUserRepoDetails<string[]>(
		userData.data?.repos_url as string
	);
	return {
		success: true,
		data: {
			...userData.data,
			skills: userRepoData.success ? userRepoData.data : [],
		},
	} as ApiResult<T>;
};

const fetchUserRepoDetails = async <T,>(url: string): Promise<ApiResult<T>> => {
	try {
		const headers: HeadersInit = new Headers();
		headers.append('Accept', 'application/vnd.github.v3+json');
		headers.append('Authorization', `${process.env.GITHUB_AUTH}`);
		const response = await fetch(url + '?per_page=100', {
			cache: 'force-cache',
			headers,
		});
		const data = await response.json();
		if (!data.message) {
			return {
				success: true,
				data: [
					...new Set<string>(
						data
							.filter(({ language }: { language?: string }) => language)
							.map(({ language }: { language: string }) => language)
					),
				],
			} as ApiResult<T>;
		}
		return {
			success: false,
			error: 'User not found',
		} as ApiResult<T>;
	} catch (e) {
		return {
			success: false,
			error: 'Something went wrong',
		} as ApiResult<T>;
	}
};

const fetchUserDetails = async <T,>(
	userName: string
): Promise<ApiResult<T>> => {
	try {
		const headers: HeadersInit = new Headers();
		headers.append('Accept', 'application/vnd.github.v3+json');
		headers.append('Authorization', `${process.env.GITHUB_AUTH}`);
		const response = await fetch(`https://api.github.com/users/${userName}`, {
			cache: 'force-cache',
			headers,
		});
		const data = await response.json();
		if (!data.message) {
			return {
				success: true,
				data,
			};
		}
		return {
			success: false,
			error: 'User not found',
		} as ApiResult<T>;
	} catch (e) {
		return {
			success: false,
			error: 'Something went wrong',
		} as ApiResult<T>;
	}
};
