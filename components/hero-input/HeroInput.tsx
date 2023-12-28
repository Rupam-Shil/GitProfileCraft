'use client';
import React, { useState } from 'react';
import style from './hero-input.module.scss';
import { CaretRight } from '@phosphor-icons/react/dist/ssr';
import useUserSearch from '@/store/useUserSearch';
function HeroInput() {
	const { userName, setUserName } = useUserSearch((state) => ({
		userName: state.userName,
		setUserName: state.setUserName,
	}));
	return (
		<div className={style['hero-input']}>
			<div className={style['hero-input-con']}>
				<CaretRight size={32} weight="regular" />
				<input
					type="text"
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
					placeholder="Enter your Github Username(e.g: John_Doe)"
				/>
			</div>
		</div>
	);
}

export default HeroInput;
