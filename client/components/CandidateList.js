import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import CandidateTable  from './CandidateTable';
import{ fetchCandidates} from '../redux/candidates'


class CandidateList extends React.Component {
    componentDidMount() {
		this.props.allCandidates();
	}
    render() {
        

		if (this.props.candidates === null) {
			return <h4>Loading...</h4>;
		}

		return (
			<div id='candidatePage'>
				<h2 id="candidate-list"> Candidate Source List</h2>
				<CandidateTable />
				{/* <CreateCandidate /> */}
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
