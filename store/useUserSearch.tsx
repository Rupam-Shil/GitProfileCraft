import { create } from 'zustand';

type UserSearch = {
	userName: string;
	setUserName: (name: string) => void;
};

const useUserSearch = create<UserSearch>((set) => ({
	userName: '',
	setUserName: (name) => {
		set({ userName: name });
	},
}));

export default useUserSearch;
