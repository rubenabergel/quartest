const answerReducer = (state={}, action) => {
	switch(action.type){
		case 'ANSWER_TO_QUESTION':
			return reduceAnswer(state, action);
		default:
			return state
	}
}

const reduceAnswer = (state, action) => {
	const newState = {}
	Object.assign(newState, state, {[action.questionIndex]:action.answer})
	return newState;
}

export default answerReducer