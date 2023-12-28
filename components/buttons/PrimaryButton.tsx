import React, { useCallback } from 'react';
import style from './button.module.scss';
export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {}

function PrimaryButton({ children, onClick, ...props }: ButtonProps) {
	return (
		<button onClick={onClick} {...props} className={style.btn}>
			{children}
		</button>
	);
}

export default PrimaryButton;
