import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CandidateList from './CandidateList';
import Home from './Home';
import NotFound from './NotFound';
import Modal from './Modal';
import CreateCandidate from './CreateCandidate';

const App = (props) => {
	const [showModal, setModalIsShowing] = useState(false);
	return (
		<Router>
			<div>
				<nav className="header">
					<Link to="/" className="logo" >
						<img src="https://i.postimg.cc/8cHbCWH9/data-piper-icon.png" />
					</Link>
					<ul className="main-nav">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/candidate">Candidate List</Link>
						</li>
						<li>
							<button
								onClick={() => {
									setModalIsShowing(true);
								}}
								id="navbutton"
							>
								New Candidate
							</button>
							{showModal && (
								<Modal
									onClose={() => {
										setModalIsShowing(false);
									}}
								>
									<CreateCandidate />
								</Modal>
							)}
						</li>
					</ul>
				</nav>
				<main>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/candidate" component={CandidateList} />
						<Route component={NotFound} />
					</Switch>
				</main>
				{/* <div>
					<CandidateList />
				</div> */}
			</div>
		</Router>
	);
};

export default App;
