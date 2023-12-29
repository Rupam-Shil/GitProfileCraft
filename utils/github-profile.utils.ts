import { GithubFullResponse } from '@/types/github_user_response';

export const githubUserNameMd = (
	name: string,
	withHand: boolean = true
): string => {
	return `<h1 align="center">Hi ${withHand ? '👋' : ''}, I'm ${name}</h1>`;
};

export const githubFollowers = (userName: string): string => {
	return `<p align="center" style="margin: 20px 0;"><a href="https://www.github.com/${userName}" target="_blank" rel="noreferrer"><img
src="https://img.shields.io/github/followers/${userName}?logo=github&style=for-the-badge&color=0891b2&labelColor=1c1917" /></a></p>
`;
};

export const githubUserBio = (bio: string | null | undefined): string => {
	return `<h3 align="center"> ${!bio ? 'I love to code :)' : bio}</h3>`;
};
export const githubAboutMe = (
	data: GithubFullResponse | null | undefined
): string => {
	if (!data) return '';
	const locationText =
		((data.location ?? 'Remote') == 'Remote'
			? "* 🌍 I'm working remotely"
			: `* 🌍  I'm based in ${data.location}`) + '\n';
	const portfolioText = data.blog
		? `* 🖥️  See my portfolio at [${data.blog
				.replace(/^https?:\/\//, '')
				.replace(/^www\./, '')
				.replace(/\..*/, '')}](${data.blog})\n`
		: '';
	const workplaceText = data.company
		? `* 🚀  I'm currently working at ${data.company}\n`
		: '';
	return `${locationText}${portfolioText}${workplaceText}`;
};

export const githubSkills = (skills: string[]): string => {
	if (!skills.length) return '';
	let skillTest = `<h2 align='center' style="margin:20px 0; display: block;"><i>💻⚙ Tech Stack 💻 (My Skills) ⚙💻</i></h2>`;

	return skillTest + `<table>${getSkillsAsTable(skills)}</table>`;
};

const getSkillsAsTable = (skills: string[]): string => {
	let str = '';
	let filtteredSkills = skills.filter((sk) => skillMap[sk]);
	for (let i = 0; i <= Math.ceil(filtteredSkills.length / 5); i++) {
		let currentArr = filtteredSkills.slice(i * 5, i * 5 + 5);
		str += `<tr>`;
		for (let j = 0; j < currentArr.length; j++) {
			let imgLink: string | undefined = skillMap[currentArr[j]];
			str += ` <td align='center' style='border: 1px solid #1E2026; border-collapse: collapse;' width="190"><img src=${imgLink} alt='' width="60" ></td>`;
		}
		str += `</tr>`;
	}
	return str;
};

export const githubStats = (userName: string): string => {
	return `<b style="margin:20px 0; display: block;">My GitHub Stats</b>

<p align="center"> <img src="https://github-readme-stats.vercel.app/api?username=${userName}&show_icons=true&theme=synthwave](https://github-readme-stats.vercel.app/api?username=${userName}&bg_color=-45,25132E,DC0D4A,61A9A6,C5D6B5,98BE85&title_color=C197D2&text_color=ffffff&hide_border=true&show_icons=true&count_private=true)" alt="rupam-shil" /> </p>
<p align="center"> 
<a href="http://www.github.com/${userName}"><img src="https://github-readme-streak-stats.herokuapp.com/?user=${userName}&stroke=ffffff&background=1c1917&ring=10b981&fire=10b981&currStreakNum=ffffff&currStreakLabel=10b981&sideNums=ffffff&sideLabels=ffffff&dates=ffffff&hide_border=true" /></a></p>
<p align="center"> 
<a href="https://github.com/${userName}" align="left"><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${userName}&show_icons=true&theme=radical&langs_count=5&title_color=10b981&text_color=ffffff&icon_color=0891b2&bg_color=1c1917&hide_border=true&locale=en&custom_title=Top%20%Languages" alt="Top Languages" /></a>
</p>

`;
};

const skillMap: { [key: string]: string } = {
	C: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg',
	'C++':
		'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/cplusplus-colored.svg',
	'C#': 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/csharp-colored.svg',
	Dart: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dart-colored.svg',
	Angular:
		'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/angularjs-colored.svg',
	Svelte:
		'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/svelte-colored.svg',
	Python:
		'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg',
	Vue: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg',
	React:
		'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg',
	TypeScript:
		'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg',
	JavaScript:
		'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg',
	EJS: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg',
	HTML: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg',
	Java: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg',
	Go: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/go-colored.svg',
	CSS: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg',
	SCSS: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg',
	PHP: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg',
	Ruby: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/ruby-colored.svg',
	Dockerfile:
		'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg',
};
