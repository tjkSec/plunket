import QuotesList from "./Quotes.js"
import JokeList from "./JokeList.js"

"use strict";
const CommandInfo = {};
const newCommandInfo = (name, info) => {
	return CommandInfo[`${name} --info`] = info;
}

/* Add information about commands here */
newCommandInfo("ranp64", "ranp64: ranp64 generates a 64 character password consistant of numbers letters and symbols.");
newCommandInfo("ranp32", "ranp32: ranp32 generates a 32 character password consistant of numbers letters and symbols.");
newCommandInfo("ranp16", "ranp16: ranp16 generates a 16 character password consistant of numbers letters and symbols.");
newCommandInfo("help", "helps you, duhhh");
newCommandInfo("clear", "clears: clears all text in the terminal");
newCommandInfo("rand", "rand: will give you a random number between 1 and 1000");
newCommandInfo("quote", "quote: recieve a random quote.");
newCommandInfo("joke", "joke: recieve a random joke.");

const Commands = {
	help: () => (
		`plunketTheTerminal is a online terminal for fun, it contains lots of different functions
		and commands. In fact you can SUBMIT YOUR OWN COMMANDS at our github if you are good with computers :).

		type '--commands' for a list of commands, if you are unsure of what the command does add --info to the end of it.`
	),
	"--commands": () => {
		let commandsArray = Object.keys(Commands);
		commandsArray.forEach((element, index) => {
			if ( element == "keys" ) {
				commandsArray.splice(index, 1);
			}
		})
		return commandsArray.join(" , ");
	},
	clear: () => {
		this.outputs = [];
	},
	rand: () => {
		return Math.floor(Math.random() * 1000 ) + 1;
	},
	ranp64: () => {
			const chars = "qwertyuiop[]\asdfghjkl;'zxcvbnm,./'`~1!2@3#4$5%6^7&8*9(0)-_=+";
			const password = [];
			for(var x=0; x < 64; x++) {
				password.push(chars.charAt(Math.floor(Math.random() * chars.length ) + 0))
			}
			return password.join("");
	},
	ranp32: () => {
		const chars = "qwertyuiop[]\asdfghjkl;'zxcvbnm,./'`~1!2@3#4$5%6^7&8*9(0)-_=+";
		const password = [];
		for(var x=0; x < 32; x++) {
			password.push(chars.charAt(Math.floor(Math.random() * chars.length ) + 0))
		}
		return password.join("");
	},
	ranp16: () => {
		const chars = "qwertyuiop[]\asdfghjkl;'zxcvbnm,./'`~1!2@3#4$5%6^7&8*9(0)-_=+";
		const password = [];
		for(var x=0; x < 16; x++) {
			password.push(chars.charAt(Math.floor(Math.random() * chars.length ) + 0))
		}
		return password.join("");
	},
	quote: () => {
		return QuotesList[Math.floor(Math.random() * QuotesList.length ) + 0]
	},
	joke: () => {
		return JokeList[Math.floor(Math.random() * JokeList.length ) + 0]
	}

}
export { Commands, CommandInfo }
