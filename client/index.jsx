import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './reducers/index.jsx';
import Landing from './components/landing.jsx';
import Home from './components/home.jsx';
import ThankYou from './containers/thankYou.jsx';
import Therapists from './containers/therapistsList.jsx';
import Test from './containers/test.jsx';


const myRoutes = () => (
	<Route path="/" component={Home}>
		<IndexRoute component={Landing}/>
		<Route path="/test" component={Test}/>
		<Route path="/therapists/:score" component={Therapists}/>
		<Route path="/thanks(/:score)" component={ThankYou}/>
	</Route>
)


var App = React.createClass({
	render() {
		return (
			<Provider store={store}>
				<Router history={browserHistory}>
					{myRoutes()}
				</Router>
			</Provider>
		)
	}
})

App.Routes = myRoutes;

module.exports = App;
