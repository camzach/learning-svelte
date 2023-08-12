<script lang="ts">
	let expression = '';
	function buttonPress(char: string) {
		return () => (expression += char);
	}
	function evaluate() {
		expression = eval(expression).toString();
	}
</script>

<div class="display">
	{expression}
</div>
<div class="buttons">
	<button on:click={() => (expression = '')}>C</button>
	<button on:click={buttonPress(' / ')}>/</button>
	<button on:click={buttonPress(' * ')}>*</button>
	<button on:click={buttonPress(' - ')}>-</button>
	<button on:click={buttonPress('7')}>7</button>
	<button on:click={buttonPress('8')}>8</button>
	<button on:click={buttonPress('9')}>9</button>
	<button on:click={buttonPress(' + ')} class="tall">+</button>
	<button on:click={buttonPress('4')}>4</button>
	<button on:click={buttonPress('5')}>5</button>
	<button on:click={buttonPress('6')}>6</button>
	<button on:click={buttonPress('1')}>1</button>
	<button on:click={buttonPress('2')}>2</button>
	<button on:click={buttonPress('3')}>3</button>
	<button on:click={evaluate} class="tall">↵</button>
	<button on:click={buttonPress('0')} class="wide">0</button>
	<button on:click={buttonPress('.')}>.</button>
</div>

<style>
	.display {
		margin-inline: auto;
		font-size: 8em;
		min-height: 1.2em;
		overflow-x: scroll;
		width: 100%;
		text-align: center;
		background-color: lightgray;
		margin-block: 10px;
		border-radius: 10px;
		border: 5px solid darkgray;
	}
	.buttons {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		aspect-ratio: 4/5;
		width: 50vh;
		margin-inline: auto;
	}
	.buttons button {
		font-size: 3rem;
	}
	.tall {
		grid-row: span 2;
	}
	.wide {
		grid-column: span 2;
	}
</style>
