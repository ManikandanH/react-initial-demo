// import React, { Component } from "react";
// import Feed from "./components/Feed";
// import "./App.css";

// class App extends Component {
//   state = { contacts: [] };

//   componentDidMount() {
//     fetch("https://api.randomuser.me/?results=50")
//       .then(response => response.json())
//       .then(parsedResponse =>
//         parsedResponse.results.map(user => ({
//           name: `${user.name.first} ${user.name.last}`,
//           email: user.email,
//           thumbnail: user.picture.thumbnail
//         }))
//       )
//       .then(contacts => this.setState({ contacts }));
//   }

//   render() {
//     return (
//       <div className="App">
//         <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
//           <ul class="navbar-nav">
//             <li class="nav-item">
//               <a class="nav-link" href="#">
//                 HOC Demo app
//               </a>
//             </li>
//           </ul>
//         </nav>

//         <Feed contacts={this.state.contacts} />
//       </div>
//     );
//   }
// }

// export default App;

import React, { useState, Suspense } from 'react';
import Sample from './components/Sample';
import Input from './components/Input';


export default function App() {
	const [flag, setFlag] = useState(true);
	const [name, setName] = useState('Manikandan')
	const [inputValue, setInputValue] = useState('')
	const [parentStateValue, setParentStateValue] = useState('This is Parent')
	const handleClick = () => {
		setFlag(false)
	}

	const handleParentValueChange = () => {
		setParentStateValue('Parent Value is Changed')
		setName('Manikandan Arjunan')
	}

	const reteriveInput = (inputValue) => {
		setInputValue(inputValue)
	}

	return (
		<div className='App'>
			{/* <div>
				{parentStateValue}
			</div>
			<button onClick={handleParentValueChange}>CLick here to change parent value</button>
			<br/>
			<br/>
			<button onClick={handleClick}>Click to hide Sample</button>
			{flag ? <Sample name={name} /> : null} */}
			Enter the Input
			<br />
			<Input passToParent={reteriveInput} />
			<button>Submit</button>
		</div>
	);
}


// function passToParent(callback){
// 	callback()
// }


// passToParent(function(){
// 	console.log("SAMPLE")
// })
