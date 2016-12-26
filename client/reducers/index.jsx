import { combineReducers, createStore } from 'redux';
import {connect} from 'react-redux';
import questionsReducer from './question.jsx';
import answerReducer from './answer.jsx';
import therapistContactReducer from './therapistContact.jsx';



// combining all reducer into the root reducer
const rootReducer = combineReducers({
	questions:questionsReducer, 
	answers:answerReducer,
	therapist:therapistContactReducer
})

//creating the store
const store = createStore(rootReducer);


// injecting what I need from the store into the props
const mapStateToProps = (state) => ({
	questions: state.questions,
	answers:state.answers, 
	therapist:state.therapist
})


//giving access to methods that I will need from props
const mapDispatchToProps = (dispatch) => {
	return {
		setAnswer (questionIndex, answer){
			dispatch({type:'ANSWER_TO_QUESTION', questionIndex:questionIndex, answer:answer})
		}, 
		setTherapist (therapistId){
			dispatch({type:'SELECT_THERAPIST', therapistId:therapistId})
		}
	}
}

const connector = connect(mapStateToProps, mapDispatchToProps);

module.exports = {connector, store}

