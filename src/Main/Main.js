import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import "./Main.css";
import {Commands, CommandInfo} from "../Commands/Commands.js"

class Main extends Component {
	constructor(props){
		super(props);
		this.state = {inputValue: ''}
		this.outputs = ["type 'help' for information about plunketTheTerminal"];

		this.commands = Commands;
		this.commandsInfo = CommandInfo;

		this.commands.keys = Object.keys(this.commands)
		this.commandsInfo.keys = Object.keys(this.commandsInfo)
	}
	handleSubmit = (event) => {
		if(event.key == "Enter") {
			if( this.state.inputValue != "" ) {
				if( this.state.inputValue == "clear") {
				 	this.outputs = [''];
				}
				if( this.commands.keys.includes(this.state.inputValue)) {
					this.outputs.unshift(this.commands[this.state.inputValue]());
				}
				else{
					if( this.commandsInfo.keys.includes(this.state.inputValue)) {
					    this.outputs.unshift(this.commandsInfo[this.state.inputValue]);
					}
					else{
						this.outputs.unshift(`No command '${this.state.inputValue}' found.`)
					}
				}
			}
			document.querySelector(".input-section").value = "";
		}
		this.forceUpdate()
	}

	handleChange = (e) => {
		this.setState({ inputValue: e.target.value })
	}
	render() {
		return(
			<div>
				<div className="terminal-header">
					<i className="material-icons exit-icon">cancel</i>
					<i className="material-icons remove-icon">remove_circle</i>
					<i className="material-icons minimize-icon">arrow_drop_down_circle</i>
				</div>
				<div className="terminal-body">
					<div className="terminal-contents-wrapper">
						<div className="output-item-wrapper">
							{
								this.outputs.map((output, index) => {
									return <h1 className="output-item" key={ index }>{output}</h1>;
								})
							}
						</div>
						<div className="input-section-wrapper">
							<input type="text" className="input-section" onKeyPress={this.handleSubmit} onChange={this.handleChange}/>
							<span className="input-section-label">plunketTheTerminal@plunketTheTerminal-H170-D3H:~$</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
};

export default Main;
