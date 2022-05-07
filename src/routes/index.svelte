<script>
	
	const random = (number) => {
		return Math.floor(Math.random()*number);;
}
function randomColor(){
 let color = 'rgb('+random(255)+','+random(255)+','+random(255)+')'; 
 document.body.style.backgroundColor = color 
	}
</script>

<div>
	<h1>I have no idea what I am doing</h1>
	<p>Hello. I am having fun</p>
<div class = 'box'></div>
	<button on:click={randomColor}>Change color</button>
</div>
<p class="foot">Made by MikiWolfe 2022</p>


<style>
	* {
		margin: 0;
		background-color: linen;
	}
	h1 {
		text-align: center;
	}
	.box {
		height: 200px;
		width: 200px;
		border: 5px solid red;

	}
	.foot {
text-align: center;
	}
</style>
