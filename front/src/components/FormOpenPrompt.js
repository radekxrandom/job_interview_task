import React from 'react';
import {CgAdd} from 'react-icons/cg';

const FormOpenPrompt = (props) => {
	return(
		<span className='prmpt' role='button' onClick={props.openForm} aria-expanded={props.isFormOpen} aria-label='openForm' tabIndex='0'>
			<CgAdd className='addIcon'/><span className='promptText'>Add new event</span>
		</span>
		)
}
export default FormOpenPrompt;