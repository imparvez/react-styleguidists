import React from 'react'
import HeaderOne from './components/header/header-one'
import HeaderTwo from './components/header/header-two'
import HeaderThree from './components/header/header-three'
import HeaderFour from './components/header/header-four'
import HeaderFive from './components/header/header-five'
import ButtonPrimary from './components/button/button-primary'

export default class App extends React.Component {
	render(){
		return(
			<div className="components-container">
				<p className="components-label">Headers</p>
				<HeaderOne />
				<HeaderTwo />
				<HeaderThree />
				<HeaderFour />
				<HeaderFive />
			</div>
		)
	}
}

/*
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router'

class App extends Component {
	render(){
		return(
			<div className="app">
				<h1>APP</h1>
				<ul role="nav">
					<li><Link activeStyle={{ color: 'red' }} to="/about">About</Link></li>
					<li><Link activeStyle={{ color: 'red' }} to="/contact">Contact</Link></li>
				</ul>
				// {add this }
		        {this.props.children}
			</div>
		)
	}
}
*/

export default App