<!-- Header.svelte -->
<script>
	import Globe from './Globe.svelte';
	import Rectangle from './Rectangle.svelte';
</script>

<header>
	<div class="dot">
		<a href="/" style="font-size: 36px"><Globe /></a>
	</div>

	<nav>
		<ul>
			<li>
				<a href="/blog">Blog</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="/projects">Projects</a>
			</li>
			<li>
				<a href="/contact">Contact</a>
			</li>
		</ul>
	</nav>
</header>
<Rectangle />

<style>
	header {
		padding: 1rem;
		background: #faf9f6;
		height: 140px;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
	}

	ul {
		list-style-type: none;
		display: flex;
		gap: 2rem;
	}

	a {
		font-family: 'Courier New', monospace;
		color: inherit;
		display: flex;
		gap: 2rem;
	}

	.dot {
		height: 100px;
		width: 100px;
		background-color: #f3dfc1;
		border-radius: 50%;
		display: inline-block;
	}
</style>
