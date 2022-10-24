<!-- Header.svelte -->
<script>
	import Globe from './Globe.svelte';
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
				<a href="/contact">Contact</a>
			</li>
		</ul>
	</nav>
</header>
<div class="rectangleContainerBack">
	<div class="rectangleContainer">
		<div class="roundRect" style="background: #f3dfc1; --width: 33vw;" />
		<div class="roundRect" style="background: #f3dfc1; --width: 12vw;" />
		<div class="roundRect" style="background: #f3dfc1; --width: 21vw;" />
		<div class="roundRect" style="background: #f3dfc1; --width: 13vw;" />
		<div class="roundRect" style="background: #f3dfc1; --width: 7vw;" />
	</div>
</div>
<div class="rectangleContainer">
	<div class="roundRect" style="background: #faf9f6; --width: 33vw;" />
	<div class="roundRect" style="background: #faf9f6; --width: 12vw;" />
	<div class="roundRect" style="background: #faf9f6; --width: 21vw;" />
	<div class="roundRect" style="background: #faf9f6; --width: 13vw;" />
	<div class="roundRect" style="background: #faf9f6; --width: 7vw;" />
</div>

<style>
	header {
		padding: 1rem;
		background: #faf9f6;
		height: 100px;
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

	.roundRect {
		width: var(--width);
		height: 0.6rem;
		border-radius: 20px;
	}

	@keyframes slide-right {
		from {
			margin-left: 40vw;
		}
		50% {
			margin-left: 20vw;
		}
		to {
			margin-left: 0vh;
		}
	}

	.dot {
		height: 100px;
		width: 100px;
		background-color: #f3dfc1;
		border-radius: 50%;
		display: inline-block;
	}

	.rectangleContainerBack {
		height: 0.6rem;
		background: #faf9f6;
	}

	.rectangleContainer {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		padding-left: 0.5vw;
		padding-right: 0.5vw;
		animation-name: slide-right;
		animation-timing-function: linear;
		-webkit-animation-timing-function: linear;
		animation-duration: 1s;
	}
</style>
