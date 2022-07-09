import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { CandidateTable } from './CandidateTable';
import{ fetchCandidates} from '../redux/candidates'

class CandidateList extends React.Component {
    componentDidMount() {
		this.props.allCandidates();
	}
    render() {
        console.log('looking in candidate ist ', this.props)

		if (this.props.candidates === null) {
			return <h4>Loading...</h4>;
		}

		return (
			<div id="candidate-list">
				<CandidateTable />
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		candidates: state.candidates,
	};
};

const mapDispatch = (dispatch) => {
	return {
		allCandidates: () => dispatch(fetchCandidates()),
	};
};

export default connect(mapState, mapDispatch)(CandidateList);
