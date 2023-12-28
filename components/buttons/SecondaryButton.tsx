import React, { useCallback } from 'react';
import style from './button.module.scss';
import { ButtonProps } from './PrimaryButton';

function SecondaryButton({ children, onClick, ...props }: ButtonProps) {
	return (
		<button
			onClick={onClick}
			{...props}
			className={`${style.btn} ${style['secondary-btn']}`}
		>
			{children}
		</button>
	);
}

export default SecondaryButton;
