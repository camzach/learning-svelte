<script lang="ts">
	import { states, todos } from './store';
	import Card from './card.svelte';

	let title = '';
	let description = '';

	function addTodo() {
		$todos = [...$todos, { title, description, state: 'To Do' }];
		title = '';
		description = '';
	}
</script>

<div class="swimlanes">
	{#each states as lane}
		<div class="lane">
			<h1>{lane}</h1>
			{#each $todos.filter(({ state }) => state === lane) as todo}
				<Card bind:todo />
			{/each}
		</div>
	{/each}
</div>

<label>Title<input bind:value={title} /></label>
<label>Description<textarea bind:value={description} /></label>
<button on:click={addTodo}>Add</button>

<style>
	.swimlanes {
		display: flex;
		flex-direction: row;
	}
	.lane {
		flex: 1;
	}
</style>
