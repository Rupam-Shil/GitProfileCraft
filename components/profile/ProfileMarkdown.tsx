'use client';
import React from 'react';
import styles from './markdown.module.scss';
import useUserGithubData from '@/store/useUserGithubData';
import Markdown from 'react-markdown';
import Image from 'next/image';
import rehypeRaw from 'rehype-raw';
function ProfileMarkdown() {
	const getMd = useUserGithubData((state) => state.getMarkdown);

	return (
		<div className={styles.profilemd}>
			{
				<Markdown components={MarkdownComponents} rehypePlugins={[rehypeRaw]}>
					{getMd()}
				</Markdown>
			}
		</div>
	);
}

const MarkdownComponents: object = {
	ul: (el: any) => {
		return <ul className={styles.list}>{el.children}</ul>;
	},
	table: (el: any) => {
		return <table className={styles.table}>{el.children}</table>;
	},
};

export default ProfileMarkdown;
