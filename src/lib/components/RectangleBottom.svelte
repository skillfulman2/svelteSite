<!-- Rectangle.svelte -->

<div class="rectangleContainer">
	<div class="roundRect" style="background: #faf9f6; --width: 33vw;" />
	<div class="roundRect" style="background: #faf9f6; --width: 12vw;" />
	<div class="roundRect" style="background: #faf9f6; --width: 21vw;" />
	<div class="roundRect" style="background: #faf9f6; --width: 13vw;" />
	<div class="roundRect" style="background: #faf9f6; --width: 7vw;" />
</div>


<div class="rectangleContainerBack">
	<div class="rectangleContainer">
		<div class="roundRectDark" style="background: #f3dfc1; --width: 33vw;" />
		<div class="roundRectDark" style="background: #f3dfc1; --width: 12vw;" />
		<div class="roundRectDark" style="background: #f3dfc1; --width: 21vw;" />
		<div class="roundRectDark" style="background: #f3dfc1; --width: 13vw;" />
		<div class="roundRectDark" style="background: #f3dfc1; --width: 7vw;" />
	</div>
</div>


<style>
	.roundRect {
		width: var(--width);
		height: 0.6rem;
		border-radius: 20px;
		animation-name: moveLight;
		animation-timing-function: linear;
		-webkit-animation-timing-function: linear;
		animation-duration: 2s;
	}

	.roundRectDark {
		width: var(--width);
		height: 0.6rem;
		border-radius: 20px;
		animation-name: moveDark;
		animation-timing-function: ease;
		-webkit-animation-timing-function: ease;
		animation-duration: 2s;
	}

	@keyframes moveLight {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateX(0);
		}
		40% {
			transform: translateX(-5vw);
		}
		60% {
			transform: translateX(-1vw);
		}
		90% {
			transform: translateX(-0.1vw);
		}
	}

	@keyframes moveDark {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateX(0);
		}
		40% {
			transform: translateX(5vw);
		}
		60% {
			transform: translateX(1vw);
		}
		90% {
			transform: translateX(0.1vw);
		}
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
	}
</style>
