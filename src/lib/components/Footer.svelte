<script lang="ts">
	import Grid from './Grid.svelte';
	import { CodepenIcon } from '@indaco/svelte-iconoir';
	import { GitHubIcon } from '@indaco/svelte-iconoir';
	import { LinkedInIcon } from '@indaco/svelte-iconoir';
	import { TwitterIcon } from '@indaco/svelte-iconoir';
	import { CenterBox3DIcon } from '@indaco/svelte-iconoir';
	import RectangleBottom from './RectangleBottom.svelte';
	import { Footer, MaterialApp } from 'svelte-materialify';

	const currentYear: number = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="icons">
		<a data-sveltekit-preload-data="tap" href="https://codepen.io/skillfulman2">
			<CodepenIcon class="roundedColor" />
		</a>
		<a data-sveltekit-preload-data="tap" href="https://github.com/skillfulman2">
			<GitHubIcon class="roundedColor" />
		</a>
		<a data-sveltekit-preload-data="tap" href="https://www.linkedin.com/in/ryan-remaly-24148211a/">
			<LinkedInIcon class="roundedColor" />
		</a>
		<a data-sveltekit-preload-data="tap" href="https://twitter.com/RyanRemaly">
			<TwitterIcon class="roundedColor" />
		</a>
		<a data-sveltekit-preload-data="tap" href="https://codesandbox.io/u/skillfulman2">
			<CenterBox3DIcon
			color="#ffffff" class="roundedColor" />
		</a>
	</div>
</footer>

<style lang="scss">
	:global(.roundedColor) {
		color: #000000;
	}
</style>
