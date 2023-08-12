<script lang="ts">
	import { states, todos } from './store';
	import Card from './card.svelte';
	import { nanoid } from 'nanoid';

	function handleDrop(key: (typeof states)[number]) {
		return (e: DragEvent) => {
			const dropId = e.dataTransfer?.getData('todo');
			if (dropId === undefined) return;
			const droppedTodo = $todos.find(({ id }) => id === dropId);
			if (!droppedTodo) return;
			droppedTodo.state = key;
			$todos = $todos;
		};
	}

	let title = '';
	let description = '';

	function addTodo() {
		$todos = [...$todos, { title, description, state: 'To Do', id: nanoid() }];
		title = '';
		description = '';
	}
</script>

<div class="swimlanes">
	{#each states as lane}
		<div
			class="lane"
			on:dragenter|preventDefault
			on:dragover|preventDefault
			on:drop|preventDefault={handleDrop(lane)}
			role="list"
		>
			<h1>{lane}</h1>
			{#each $todos.filter(({ state }) => state === lane) as todo}
				<Card bind:todo />
				<div class="divider" role="presentation" />
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
		background-color: darkgray;
		border-radius: 10px;
		text-align: center;
		margin: 5px;
	}
	.divider:not(:last-of-type) {
		border-image-source: linear-gradient(to right, rgba(0, 0, 0, 0), black, rgba(0, 0, 0, 0));
		border-image-slice: 1;
		border-top-width: 1px;
		border-style: solid;
		height: 0;
		width: 75%;
		margin-inline: auto;
		border-left: 0;
		border-right: 0;
		border-bottom: 0;
	}
</style>
