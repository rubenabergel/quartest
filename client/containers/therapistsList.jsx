import React, {Component} from 'react';
import {therapists} from '../../public/data.json';
import {connector} from '../reducers/index.jsx';
import { browserHistory } from 'react-router';
import Card from '../components/card.jsx';

var OptionsList = React.createClass({
	handleContact(data){
		this.props.setTherapist(data.therapistId)
		browserHistory.push('/thanks');
	},
	render() {
		let result;
		var that = this;
		if (this.props.params.score<=14){
			result = "moderate";
		}else if (this.props.params.score>=14 && this.props.params.score<=19){
			result = "moderately severe";
		}else{
			result = "severe";
		}
		return (
			<div>
				<p>{`Your result show that you show signs of ${result} depression`}</p>
				<p>You can easily contact one of the following therapist to set up an appointment.</p>
				
				<div className="row">
					{therapists.map((therapist, i)=>{
						return <Card propClass="col-md-4" key={i} title={therapist.name} handleClickOnCardButton={that.handleContact.bind(null, {'therapistId':therapist.id} ) }/>
					})}
				</div>
			</div>
		)
	}
})

module.exports = connector(OptionsList)
