<script>
	import Main from '../lib/components/Main.svelte';
	import HomepageLinkList from '$lib/components/HomepageLinkList.svelte';
</script>

<svelte:head>
	<title>Ryan Remaly</title>
	<meta property="og:title" content="Ryan Remaly" />
	<meta
		data-key="description"
		property="og:description"
		name="description"
		content="Soccer coach"
	/>
	<meta property="og:image" content="https://>RyanRemaly.dev/images/site-image.png" />
	<meta name="twitter:image" content="https://>RyanRemaly.dev/images/site-image.png" />
</svelte:head>

<Main>
	<div class="intro">
		<div class="intro__headline" />

		<div class="intro__body">
			<h1>Hello my name is <b>Ryan</b></h1>
		</div>
		<HomepageLinkList />
	</div>
</Main>

<style lang="scss">
</style>
