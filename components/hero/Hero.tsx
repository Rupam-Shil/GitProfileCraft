import React from 'react';
import style from './hero.module.scss';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import HeroInput from '../hero-input/HeroInput';
function Hero() {
	return (
		<div className={style.hero}>
			<p className={style['hero-header']}>
				Generate an impressive <span>GitHub profile</span> in seconds.
			</p>
			<p className={style['hero-subheader']}>
				Display your expertise, background, and projects effortlessly using
				generated markdown for your profile!
			</p>
			<HeroInput />
			<div className={style.btns}>
				<PrimaryButton>Generate Profile</PrimaryButton>
				<SecondaryButton>Create Your Own</SecondaryButton>
			</div>
		</div>
	);
}

export default Hero;
