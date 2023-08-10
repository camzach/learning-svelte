<script lang="ts">
	import { todos } from './store';
	import Card from './card.svelte';

	const sorted = $todos.reduce<Record<string, typeof $todos>>(
		(acc, curr) => {
			if (curr.state === 'todo') acc['To Do'].push(curr);
			else if (curr.state === 'inprogress') acc['In Progress'].push(curr);
			else acc['Complete'].push(curr);
			return acc;
		},
		{ 'To Do': [], 'In Progress': [], Complete: [] }
	);

	let title = '';
	let description = '';

	function addTodo() {
		$todos = [...$todos, { title, description, state: 'todo' }];
		title = '';
		description = '';
	}
</script>

<div class="swimlanes">
	{#each Object.entries(sorted) as [key, list]}
		<div class="lane">
			<h1>{key}</h1>
			{#each list as todo}
				<Card {todo} />
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
