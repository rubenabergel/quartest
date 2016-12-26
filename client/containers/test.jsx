import React from 'react';
import {connector} from '../reducers/index.jsx';
import { browserHistory } from 'react-router';

var Test = React.createClass({
	selectAnswer(data){
		this.props.setAnswer(data.question,data.answer);
	},
	submitTest(){
		var score = 0;
		for ( var answer in this.props.answers){
			score += this.props.answers[answer]
		}
		if (score >= 10){
			browserHistory.push('/therapists/'+score);
		}else{
			browserHistory.push('/thanks/'+score);
		}
	},
	render() {
		const that = this;
		return (
			<div>
				<h4 className="testTitle">Patient Health Questionnaire (PHQ-9)</h4>
				<p>Over the last two weeks, how often have you been bothered by any of the following problems?</p>
				<ul className="list-group">
				{this.props.questions.map(function(question, i){
					return <li className="list-group-item" key={i}>
								<h5>{question}</h5>
								<div>
									<button className={"btn btn-secondary " + (that.props.answers[i] == 0 ? 'btn-success' : '')} onClick={that.selectAnswer.bind(null, {'question':i, 'answer':0})}>Not At all</button>
									<button className={"btn btn-secondary " + (that.props.answers[i] == 1 ? 'btn-success' : '')} onClick={that.selectAnswer.bind(null, {'question':i, 'answer':1})}>Several days</button>
									<button className={"btn btn-secondary " + (that.props.answers[i] == 2 ? 'btn-success' : '')} onClick={that.selectAnswer.bind(null, {'question':i, 'answer':2})}>More than half the days in the week</button>
									<button className={"btn btn-secondary " + (that.props.answers[i] == 3 ? 'btn-success' : '')} onClick={that.selectAnswer.bind(null, {'question':i, 'answer':3})}>Nearly every day</button>
								</div>
							</li>
				})}
				<li className="list-group-item center">
					<button className="btn btn-primary" onClick={this.submitTest}>Submit</button>
				</li>
				</ul>
			</div>
		)
	}
})

module.exports = connector(Test)