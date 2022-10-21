<!-- Header.svelte -->
<script>
	import Globe from './Globe.svelte';
</script>

<header>
	<a href="/" style="font-size: 36px"><Globe /></a>
	<nav>
		<ul>
			<li>
				<a href="/blog">Blog</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="/contact">Contact</a>
			</li>
		</ul>
	</nav>
</header>
<div id="roundedContainerTop" >
  <div id="roundRectDark" />
  <div id="roundRectDark" />
  <div id="roundRectDark" />
  <div id="roundRectDark" />
</div>
<div id="roundedContainer">
	<div id="roundRect" />
	<div id="roundRect" />
	<div id="roundRect" />
	<div id="roundRect" />
</div>

<style>
	header {
		padding: 1rem;
		background: #faf9f6;
		display: flex;
		flex-wrap: wrap;
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

	#roundRect {
		width: 12rem;
		height: .5rem;
		background: #faf9f6;
		border-radius: 20px;
	}

	#roundRectDark {
		width: 12rem;
		height: .5rem;
		background: #f3dfc1;
		border-radius: 20px;
	}

	#roundedContainer {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding-left: 2rem;
		padding-right: 2rem;
	}

	#roundedContainerTop {
    background: #faf9f6;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding-left: 2rem;
		padding-right: 2rem;
	}
</style>
