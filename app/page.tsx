import Image from 'next/image';
import styles from './page.module.css';
import WidthWrapper from '@/components/wrapper/WidthWrapper';
import Navbar from '@/components/navbar/Navbar';

export default function Home() {
	return (
		<div>
			<Navbar />
			<WidthWrapper width={1080}>
				<div>asdfasf</div>
			</WidthWrapper>
		</div>
	);
}
