import { Button } from '../../components/Button';
import { ReactComponent as LandingBackground } from '../../assets/illustration-working.svg';

import './styles.css';

export const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero-main'>
				<h1>More than just shorter links</h1>
				<p className='hero-description-text'>
					Build your brand's recognition and get detailed insights on how your
					links are performing.
				</p>
				<Button isRounded isPrimary>
					Get Started
				</Button>
			</div>
		</div>
	);
};
