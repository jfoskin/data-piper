import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CandidateList from './CandidateList';
import Home from './Home';
import NotFound from './NotFound';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<nav>
						<div className="navContainer">
							<span className="navLink1">
                                {/* this image will be the data piper logo that will also link to home */}
								{/* <img
									src="https://fcit.usf.edu/matrix/wp-content/uploads/2017/01/DanceBot-3-LG.gif"
									id="navlogo"
								/> */}
							</span>
                            {/* this home link will be connected to the logo */}
							{/* <span>
								<Link to="/" className="navLink1" id="another1">
									Home
								</Link>
							</span> */}
						</div>
						<div>
							<Link className="navLink" to="/candidate">
								Candidate List
							</Link>
                            {/* possibly will add another link that will be a clients list that will then link to another page of candidates based on the client */}
							{/* <Link className="navLink" to="/projects">
								Projects
							</Link> */}
						</div>
					</nav>
					<h2> Welcome to the Candidate Source List </h2>
					<CandidateList />
				</div>
			</Router>
		);
	}
}

export default App;
