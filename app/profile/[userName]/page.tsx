import { ApiResult } from '@/types/api_result';
import axios from 'axios';

export default async function Page({
	params,
}: {
	params: { userName: string };
}) {
	const userData = await fetchUserGithubData(params.userName);
	if (!userData.success) {
		throw new Error(userData.error);
	}
	return <div>{userData.data.name}</div>;
}

const fetchUserGithubData = async (userName: string) => {
	try {
		const { data } = await axios.get(
			`https://api.github.com/users/${userName}`
		);
		if (data.message === 'Not Found') {
			return {
				success: false,
				error: 'User not found',
			} as ApiResult<any>;
		}
		return {
			success: true,
			data,
		};
	} catch (e) {
		console.log(e);
		return {
			success: false,
			error: 'Something went wrong',
		} as ApiResult<any>;
	}
};
