import React from 'react';
import {connector} from '../reducers/index.jsx';
import {therapists} from '../../public/data.json';

var ThankYou = React.createClass({
	render() {
		var body;
		var currentTherapist;	
		// if there is a props = therapist - it means the patient has selected one
		// if not, it means the patient was redirected here after score low on the test
		if (this.props.therapist){
			var that = this;
			therapists.forEach(function(therapist){
				if (therapist.id === that.props.therapist){
					currentTherapist = therapist;
					body = <div><p>{currentTherapist.name} will be in touch</p><p>Thank you very much!</p></div>
				}
			})
		}else{
			// The patient scored low on the test
			// I am just making a difference between no depression and mild depression for the final message displayed to the patient. 
			var result;
			if (this.props.params.score){
				const score = this.props.params.score;
				if (score < 4 ){
					body = <div><p>You are a happy man! At least that's that :). Your doctor will be touch for the next steps.</p><p>Thank you!</p></div>
				}else if (score>4  && score<10 ){
					body = <div><p>You have a very mild depression! Nothing to worry about too much. Your doctor will be touch for the next steps.</p><p>Thank you!</p></div>
				}
			}
		}
		return (
			<div>
				{body}
			</div>
		)
	}
})


module.exports = connector(ThankYou)