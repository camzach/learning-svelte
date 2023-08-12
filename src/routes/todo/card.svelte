<script lang="ts">
	import type { Todo } from './store';

	import page from './images/Page.svg';
	import watch from './images/Stopwatch.svg';
	import check from './images/Check.svg';

	export let todo: Todo;

	let dragging = false;
</script>

<div
	class="todoItem"
	draggable={true}
	on:dragstart={(e) => {
		e.dataTransfer?.setData('todo', todo.id);
		dragging = true;
	}}
	aria-grabbed={dragging}
	role="listitem"
>
	{#if todo.state === 'Completed'}
		<img class="icon" src={check} alt="Completed" />
	{:else if todo.state === 'In Progress'}
		<img class="icon" src={watch} alt="In Progress" />
	{:else}
		<img class="icon" src={page} alt="To Do" />
	{/if}
	<h2>{todo.title}</h2>
	<p>{todo.description}</p>
</div>

<style>
	.todoItem {
		text-align: initial;
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-template-rows: 1fr 1fr;
		background-color: lightgray;
		border-radius: 1em;
		margin: 1em;
	}
	.icon {
		grid-row: span 2;
		max-width: 100%;
		height: 100%;
	}
</style>
