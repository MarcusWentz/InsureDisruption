import React, { Component } from "react";

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			account: "default",
		};
	}

	render() {
		return <div className="App-background">About</div>;
	}
}

export default About;