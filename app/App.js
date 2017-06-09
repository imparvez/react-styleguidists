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
				{/* add this */}
		        {this.props.children}
			</div>
		)
	}
}

export default App