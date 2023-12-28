import React from 'react';
import style from './width-wrapper.module.scss';

interface WidthWrapperProps {
	width?: number;
	children?: React.ReactNode;
}

function WidthWrapper({ width = 1200, children }: WidthWrapperProps) {
	return (
		<div
			className={style.width}
			style={{ '--width': `${width}px` } as React.CSSProperties}
		>
			{children}
		</div>
	);
}

export default WidthWrapper;
