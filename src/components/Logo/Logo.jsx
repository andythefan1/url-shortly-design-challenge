import { ReactComponent as LogoSvg } from '../../assets/logo.svg';

const Logo = ({ fill, stroke, ...props }) => {
	return <LogoSvg fill={fill} stroke={stroke} />;
};

export default Logo;
