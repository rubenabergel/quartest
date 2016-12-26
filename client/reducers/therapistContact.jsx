const therapistContactReducer = (state='', action) => {
	switch(action.type){
		case 'SELECT_THERAPIST':
			return reducetherapistContact(state, action);
		default:
			return state
	}
}

const reducetherapistContact = (state, action) => {
	var newState = action.therapistId
	return newState;
}

export default therapistContactReducer