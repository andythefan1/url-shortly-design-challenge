import './styles.css';

export const URLInput = ({ value, label, placeholder, isError, onChange }) => {
	return (
		<label className={`url-input-label ${isError ? 'error' : ''}`}>
			<input
				className={`url-input ${isError ? 'error' : ''} rounded`}
				onChange={onChange}
				type='url'
				value={value}
				placeholder={placeholder}
			></input>
			{label}
		</label>
	);
};
