import { URLInput } from '../URLInput';
import { Button } from '../Button';

import './styles.css';

export const ShortenURLForm = ({ onChange, label, onSubmit, url, error }) => {
	const handleSubmitClick = (e) => {
		e.preventDefault();
		onSubmit();
	};

	return (
		<form className='submit-url-form'>
			<URLInput
				placeholder='Shorten a link here...'
				label={error}
				isError={error}
				onChange={onChange}
				value={url}
			></URLInput>
			<Button onClick={handleSubmitClick}>{label}</Button>
		</form>
	);
};
