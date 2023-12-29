'use client';
import React from 'react';
import styles from './error.module.scss';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import SecondaryButton from '@/components/buttons/SecondaryButton';
import { useRouter } from 'next/navigation';
function Error({ reset }: { reset: () => void }) {
	const router = useRouter();
	return (
		<div className={`${styles.error} square-bg`}>
			<h1 className={styles.heading}>
				User <span>Not Found</span>!!
			</h1>
			<h3 className={styles.subheading}>
				Please try with a different username....
			</h3>
			<div className={styles.btns}>
				<PrimaryButton onClick={reset}>Retry</PrimaryButton>
				<SecondaryButton onClick={() => router.push('/')}>
					Try With Different Username
				</SecondaryButton>
			</div>
		</div>
	);
}

export default Error;
