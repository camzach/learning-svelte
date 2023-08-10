<script lang="ts">
	import type { Todo } from './store';

	import page from './images/Page.svg';
	import watch from './images/Stopwatch.svg';
	import check from './images/Check.svg';

	export let todo: Todo;
</script>

<div class="todoItem">
	<div class="icon">
		{#if todo.state === 'Completed'}
			<img src={check} alt="Completed" />
		{:else if todo.state === 'In Progress'}
			<img src={watch} alt="In Progress" />
		{:else}
			<img src={page} alt="To Do" />
		{/if}
	</div>
	<h2>{todo.title}</h2>
	<p>{todo.description}</p>
	<button on:click={() => (todo.state = 'Completed')}>Done!</button>
</div>

<style>
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
