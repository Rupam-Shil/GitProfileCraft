import { ApiResult } from '@/types/api_result';
import axios from 'axios';
import { create } from 'zustand';

type UserGithubStoreData = {
	fetchUserGithubData: (userName: string) => Promise<ApiResult<any>>;
};

const useUserGithubData = create<UserGithubStoreData>((set, get) => ({
	fetchUserGithubData: async (userName: string) => {
		try {
			const { data } = await axios.get(
				`https://api.github.com/users/${userName}`
			);
			if (data.message != 'Not Found') {
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
			return {
				success: false,
				error: 'Something went wrong',
			} as ApiResult<any>;
		}
	},
}));

export default useUserGithubData;
