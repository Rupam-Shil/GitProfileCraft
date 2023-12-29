import { ApiResult } from '@/types/api_result';
import { GithubFullResponse } from '@/types/github_user_response';
import {
	githubAboutMe,
	githubFollowers,
	githubSkills,
	githubStats,
	githubUserBio,
	githubUserNameMd,
} from '@/utils/github-profile.utils';
import axios from 'axios';
import { create } from 'zustand';

type UserGithubStoreData = {
	setUserGithubData: (data: GithubFullResponse) => void;
	userGithubData: GithubFullResponse | null;
	getMarkdown: () => string;
};

const useUserGithubData = create<UserGithubStoreData>((set, get) => ({
	userGithubData: null,
	setUserGithubData: (data: GithubFullResponse) => {
		set({ userGithubData: data });
	},
	getMarkdown: () => {
		return (
			githubUserNameMd(get().userGithubData?.name ?? '') +
			'\n\n\n' +
			githubUserBio(get().userGithubData?.bio ?? '') +
			'\n\n\n' +
			githubFollowers(get().userGithubData?.login ?? '') +
			'\n\n\n' +
			githubAboutMe(get().userGithubData) +
			'\n\n\n' +
			githubSkills(get().userGithubData?.skills ?? []) +
			'\n\n\n' +
			githubStats(get().userGithubData?.login ?? '')
		);
	},
}));

export default useUserGithubData;
