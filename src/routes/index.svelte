<script>
	const random = (number) => {
		return Math.floor(Math.random() * number);
	};
	function randomColor() {
		let color = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
		document.getElementById('box').style.backgroundColor = color;
	}
</script>

<div>
	<title>Magic color changing box</title>
	<h1>I have no idea what I am doing</h1>
	<p class="welcome">Hello! Click the button to change the color of the box.</p>

	<div id="box" />

	<button on:click={randomColor}>Click me!</button>
	<p class="foot">Made by MikiWolfe 2022</p>
</div>

<style>
	* {
		font-family: Helvetica, sans-serif;
		margin: 0px;
		background-color: rgb(240, 209, 240);
		padding: 0.5%;
	}
	h1 {
		text-align: center;
	}
	.welcome {
		font-size: 20px;
	}
	#box {
		height: 200px;
		width: 200px;
		border: 5px solid black;
		background-color: rebeccapurple;
		margin-bottom: 5px;
	}
	button {
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
