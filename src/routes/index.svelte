<script>
	// Function to get a random number
	const random = (number) => {
		return Math.floor(Math.random() * number);
	};

	// Function to return a random color
	const randomColor = () => {
		let color = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
		// console.log(color, '🐱‍👤');
		document.getElementById('box').style.backgroundColor = color;
	};
	// Function to return a random size
	const randomSize = () => {
		let size = Math.floor(Math.random() * 701) + 'px';
		// console.log(size, '🤘');
		document.getElementById('box').style.height = size;
		document.getElementById('box').style.width = size;
	};

	// Function to return a random position
	const randomPosition = () => {
		let box = document.getElementById('box');
		let x = Math.floor(Math.random() * 300);
		let y = Math.floor(Math.random() * 750);
		box.style.top = x + 'px';
		box.style.left = y + 'px';
	};
	// onClick function to handle all functions
	const handleClick = () => {
		randomColor();
		randomSize();
		randomPosition();
	};
</script>

<div class="container">
	<title>Magic Box</title>
	<h1>I have no idea what I am doing</h1>
	<p class="welcome">Click the button to see the magic.</p>

	<button on:click={handleClick}>Click me!</button>
	<p class="foot">Made by MikiWolfe 2022 💕</p>
	<div id="box" />
</div>

<style>
	* {
		font-family: Helvetica, sans-serif;
		margin: 0px;
		background-color: rgb(240, 209, 240);
		padding: 0.5%;
	}
	.container {
		width: 98%;
		height: 100%;
		position: absolute;
	}
	h1 {
		text-align: center;
	}
	.welcome {
		font-size: 20px;
		text-align: center;
	}
	#box {
		position: relative;
		height: 200px;
		width: 200px;
		border: 5px solid black;
		background-color: rebeccapurple;
		margin-bottom: 5px;
	}
	button {
		font-size: 16px;
		background-color: rebeccapurple;
		color: whitesmoke;
		cursor: pointer;
		padding: 0.5%;
		width: 10%;
		margin-left: 45%;
		margin-right: 45%;
		border: 3px white solid;
	}
	button:hover {
		background-color: rgb(238, 238, 140);
		color: black;
	}
	.foot {
		text-align: center;
	}
</style>
