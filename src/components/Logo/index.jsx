import { ReactComponent as LogoSvg } from '../../assets/logo.svg';
import './styles.css';

const Logo = ({ inverse }) => {
	return <LogoSvg className={inverse ? 'logo logo--inverse' : 'logo'} />;
};

export default Logo;
