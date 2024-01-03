import './styles.css';
export const InfoCard = ({ header, children, Icon }) => {
	return (
		<div className='info-card'>
			<div className='info-card-icon'>
				<Icon></Icon>
			</div>
			<h3 className='info-card-header'>{header}</h3>
			<div className='info-card-description'>{children}</div>
		</div>
	);
};
