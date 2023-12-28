import React from 'react';
import style from './navbar.module.scss';
import { GithubLogo } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
function Navbar() {
	return (
		<div className={style.navbar}>
			<div>Github Profile Maker</div>
			<div className={style.cta}>
				<Link
					href={'https://github.com/Rupam-Shil/GitProfileCraft'}
					target="_blank"
				>
					<GithubLogo size={32} weight="duotone" />
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
