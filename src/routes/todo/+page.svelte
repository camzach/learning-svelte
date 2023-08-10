<script lang="ts">
	import { todos } from './store';
	import page from './images/Page.svg';
	import watch from './images/Stopwatch.svg';
	import check from './images/Check.svg';

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
		<div>
			<h1>{key}</h1>
			{#each list as todo}
				<div class="todoItem">
					<div class="icon">
						{#if todo.state === 'completed'}
							<img src={check} alt="Completed" />
						{:else if todo.state === 'inprogress'}
							<img src={watch} alt="In Progress" />
						{:else}
							<img src={page} alt="To Do" />
						{/if}
					</div>
					<h2>{todo.title}</h2>
					<p>{todo.description}</p>
				</div>
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
	.todoItem {
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-template-rows: 1fr 1fr;
		background-color: lightgray;
		border-radius: 1em;
		margin: 1em;
	}
	.icon {
		grid-row: 1 / 3;
	}
	.icon img {
		height: 100%;
	}
</style>
