import './styles.css';

export const URLInput = ({ value, label, placeholder, isError, onChange }) => {
	return (
		<label className='url-input'>
			<input
				className='url-input'
				onChange={onChange}
				type='url'
				value={value}
				placeholder={placeholder}
			></input>
			{label}
		</label>
	);
};
