<script lang="ts">
	import Grid from './Grid.svelte';
	import { CodepenIcon } from '@indaco/svelte-iconoir';
  import { GitHubIcon } from '@indaco/svelte-iconoir';
	import { ListIcon } from '@indaco/svelte-iconoir/icons/ListIcon';

	const currentYear: number = new Date().getFullYear();
</script>

<div class="footer-wrapper">
	<footer class="footer">
		<a data-sveltekit-preload-data="tap" href="https://codepen.io/skillfulman2">
			<CodepenIcon class="roundedColor" />
		</a>
    <a data-sveltekit-preload-data="tap" href="https://github.com/skillfulman2">
			<GitHubIcon class="roundedColor" />
		</a>
	</footer>
</div>

<style lang="scss">
</style>
