'use client';
import React from 'react';
import styles from './loading.module.scss';
import { Player } from '@lottiefiles/react-lottie-player';
function Loading() {
	return (
		<div className={`${styles.loading} square-bg`}>
			<Player
				autoplay
				loop
				src="/loading.json"
				style={{ height: '200px', width: '200px' }}
			></Player>
			<div className={styles.text}>
				We are fetching your github data, please wait....
			</div>
		</div>
	);
}

export default Loading;
