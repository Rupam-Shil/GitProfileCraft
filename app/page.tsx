import WidthWrapper from '@/components/wrapper/WidthWrapper';
import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/hero/Hero';

export default function Home() {
	return (
		<div className="square-bg home-main">
			<Navbar />
			<WidthWrapper width={1080}>
				<Hero />
			</WidthWrapper>
		</div>
	);
}
