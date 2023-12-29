import { Button } from '../../components/Button';

import './styles.css';

export const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero-main'>
				<h1 className='hero-headline-text'>More than just shorter links</h1>
				<p className='hero-description-text'>
					Build your brand's recognition and get detailed insights on how your
					links are performing.
				</p>
				<Button isRounded isPrimary>
					Get Started
				</Button>
			</div>
			<div className='hero-aside'></div>
		</div>
	);
};
