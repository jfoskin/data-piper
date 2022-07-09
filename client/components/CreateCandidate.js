import React, { Component } from 'react';
import { createCandidate } from '../redux/candidates';
import { connect } from 'react-redux';

class CreateCandidate extends Component {
	constructor() {
		super();
		this.state = {
			Client: '',
            POC: '',
            Email: '',
            Role: '',
            Urgency: 'Low',
            Quantity: 1,
            SkillsNeeded: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}

	handleSubmit(evt) {
		evt.preventDefault();
		this.props.createCandidate({ ...this.state});
		window.location.reload();
	}

	render() {
		const { Client, POC, Email, Role, Urgency, Quantity, SkillsNeeded } = this.state;
		const { handleSubmit, handleChange } = this;
		return (
			<form id="project-form" onSubmit={handleSubmit}>
				<label htmlFor="client">Client Name:</label>
				<input name="Client" onChange={handleChange} value={Client} required/>

                <label htmlFor='poc'>Point of Contact:</label>
                <input name='POC' onChange={handleChange} value={POC} required/>

                <label htmlFor='email'>Email:</label>
                <input name='Email' onChange={handleChange} value={Email} required/>

                <label htmlFor='role'>Role:</label>
                <input name='Role' onChange={handleChange} value={Role}  required/>

                <label htmlFor='urgency'>Urgency:</label>
                <select name="Urgency" value={Urgency} onChange={handleChange} >
                    <option value='High'>High</option>
                    <option value='Med'>Med</option>
                    <option value='Low' defaultValue={'Low'}>Low</option>
                </select>

                <label htmlFor='quantity'>Quantity:</label>
                <input type='number' name='Quantity' onChange={handleChange} value={Quantity} min="0" max="100"required/>

                <label htmlFor='skillsNeeded'>Skills Needed:</label>
                <input name='SkillsNeeded' onChange={handleChange} value={SkillsNeeded} required/>

				<button type="submit">Submit</button>
			</form>
		);
	}
}

const mapDispatchToProps = (dispatch, { history }) => ({
	createCandidate: (candidate) => dispatch(createCandidate(candidate, history)),
});

export default connect(null, mapDispatchToProps)(CreateCandidate);
