<div class="app">
	<header>
		<nav>
			<a href="/">Home</a>
			<a href="/todo">Todo List</a>
		</nav>
	</header>

	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
	header nav {
		display: flex;
		flex-direction: row;
		margin-inline: auto;
		width: max-content;
		justify-content: center;
		justify-content: space-around;

		padding: 0;
	}
	header a {
		display: block;
		flex-basis: 100%;
		flex-shrink: 1;
	}
</style>
