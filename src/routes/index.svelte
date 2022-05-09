<script>
	import { onMount } from 'svelte';

	const random = (number) => {
		return Math.floor(Math.random() * number);
	};

	const randomColor = () => {
		let color = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
		console.log(color, '🐱‍👤');
		document.getElementById('box').style.backgroundColor = color;
	};

	const randomSize = () => {
		let size = Math.floor(Math.random() * 701) + 'px';
		console.log(size, '🤘');
		document.getElementById('box').style.height = size;
		document.getElementById('box').style.width = size;
	};

	// const randomPosition = () => {
	// 	let randomTop = getRandomNumber(0, winHeight);
	// 	let randomLeft = getRandomNumber(0, winWidth);
	// 	let winWidth = onMount.innerWidth;
	// 	let winHeight = onMount.innerHeight;
	// 	document.getElementById('box').style.top = randomTop + 'px';
	// 	document.getElementById('box').style.left = randomLeft + 'px';
	// };
	const handleClick = () => {
		randomColor();
		randomSize();
		// randomPosition()
	};

</script>

<div class="container">
	<title>Magic Box</title>
	<h1>I have no idea what I am doing</h1>
	<p class="welcome">Hello! Click the button to see the magic.</p>

	<div id="box" />

	<button on:click={handleClick}>Click me!</button>
	<p class="foot">Made by MikiWolfe 2022 💕</p>
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
	}
	#box {
		position: relative;
		/* z-index: 9; */
		height: 200px;
		width: 200px;
		border: 5px solid black;
		background-color: rebeccapurple;
		margin-bottom: 5px;
	}
	button {
		position: absolute;
		font-size: 16px;
		background-color: black;
		color: whitesmoke;
		cursor: pointer;
	}
	button:hover {
		background-color: rgb(238, 238, 140);
		color: black;
	}
	.foot {
		text-align: center;
	}
</style>
