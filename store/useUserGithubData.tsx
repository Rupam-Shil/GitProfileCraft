import { ApiResult } from '@/types/api_result';
import { GithubFullResponse } from '@/types/github_user_response';
import axios from 'axios';
import { create } from 'zustand';

type UserGithubStoreData = {
	setUserGithubData: (data: GithubFullResponse) => void;
	userGithubData: GithubFullResponse | null;
};

const useUserGithubData = create<UserGithubStoreData>((set, get) => ({
	userGithubData: null,
	setUserGithubData: (data: GithubFullResponse) => {
		set({ userGithubData: data });
	},
}));

export default useUserGithubData;
