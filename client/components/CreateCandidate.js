import React, { Component } from 'react';
import { createCandidate } from '../redux/candidates';
import { connect } from 'react-redux';

class CreateCandidate extends Component {
	constructor() {
		super();
		this.state = {
			client: '',
            poc: '',
            email: '',
            role: '',
            urgency: 'Low',
            quantity: 1,
            skillsNeeded: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}

	async handleSubmit(evt) {
		evt.preventDefault();
		await this.props.createCandidate({ ...this.state});
	}

	render() {
		const { client, poc, email, role, urgency, quantity, skillsNeeded } = this.state;
		const { handleSubmit, handleChange } = this;
        console.log(this.state)
		return (
			<form id="project-form" onSubmit={handleSubmit}>
				<label htmlFor="client">Client Name:</label>
				<input name="client" onChange={handleChange} value={client} required/>

                <label htmlFor='poc'>Point of Contact:</label>
                <input name='poc' onChange={handleChange} value={poc} required/>

                <label htmlFor='email'>Email:</label>
                <input name='email' onChange={handleChange} value={email} required/>

                <label htmlFor='role'>Role:</label>
                <input name='role' onChange={handleChange} value={role}  required/>

                <label htmlFor='urgency'>Urgency:</label>
                <select name="urgency" value={urgency} onChange={handleChange} >
                    <option value='High'>High</option>
                    <option value='Med'>Med</option>
                    <option value='Low' defaultValue={'Low'}>Low</option>
                </select>

                <label htmlFor='quantity'>Quantity:</label>
                <input type='number' name='quantity' onChange={handleChange} value={quantity} min="0" max="100"required/>

                <label htmlFor='skillsNeeded'>Skills Needed:</label>
                <input name='skillsNeeded' onChange={handleChange} value={skillsNeeded} required/>

				<button type="submit">Submit</button>
			</form>
		);
	}
}

const mapDispatchToProps = (dispatch, { history }) => ({
	createCandidate: (candidate) => dispatch(createCandidate(candidate, history)),
});

export default connect(null, mapDispatchToProps)(CreateCandidate);
