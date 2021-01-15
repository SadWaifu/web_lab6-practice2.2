import './App.css';
import React from 'react'

function App() {
	return (
		<section>
			<div className="time main">
				<h2 id="hours"></h2>
				<h2 id="dots">:</h2>
				<h2 id="minutes"></h2>
			</div>
			<div className="time sec">
				<span id="ampm"></span>
				<h2 id="seconds"></h2>
			</div>
		</section>
	);
}

function ReBuild() {
	let _hours = new Date().getHours();

	document.getElementById('hours').innerHTML = TimeSupport(_hours);
	document.getElementById('minutes').innerHTML = TimeSupport(new Date().getMinutes());
    document.getElementById('seconds').innerHTML = TimeSupport(new Date().getSeconds());
    document.getElementById('ampm').innerHTML = (_hours < 13) ? "AM" : "PM";
}

function TimeSupport(_num) {
	return ((_num < 10) ? "0" : "") + _num;
}

setInterval(ReBuild, 1000);

export default App;