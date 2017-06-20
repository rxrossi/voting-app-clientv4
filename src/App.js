import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import ViewPolls      from './pages/ViewPolls';
import LoginPage      from './pages/LoginPage';
import RegisterPage   from './pages/RegisterPage';
import UserHome       from './pages/UserHome';
import CreatePollPage from './pages/CreatePollPage';

import ProtectRoute from './ProtectRoute';

class App extends Component {
  render() {
		const isAuthenticated = false;
		const protectRoute = ProtectRoute(isAuthenticated);
    return (
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">View Polls</Link>
							</li>
							{ !isAuthenticated ?
									<li>
										<Link to="/login">Login</Link>
									</li>
									:
									<li>
										<Link to="/logout">Logout</Link>
									</li>
							}
							{ isAuthenticated &&
									<li>
										<Link to="/userhome">User home</Link>
									</li>
							}
							{ isAuthenticated &&
									<li>
										<Link to="/createpoll">Create a Poll</Link>
									</li>
							}
						</ul>
					</nav>
					<Route exact path="/" component={ViewPolls}/>

					<Route path="/login" component={LoginPage}/>
					<Route path="/register" component={RegisterPage}/>

					<Route path="/userhome" component={protectRoute(UserHome)}/>

					<Route path="/createpoll" component={CreatePollPage}/>
				</div>
			</Router>
		);
	}
}

export default App;
