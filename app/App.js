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