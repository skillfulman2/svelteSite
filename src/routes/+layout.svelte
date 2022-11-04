<!-- +layout.svelte -->
<script>
	import Header from '$lib/components/Header.svelte';
	import Section from '../lib/components/Section.svelte';
	import '$lib/styles/style.scss';
	import { fade } from 'svelte/transition';
	import Footer from '$lib/components/Footer.svelte'

	export let data;
</script>

<!-- src/routes/+layout.svelte -->




<div>


<Header />


{#key data.currentRoute}
	<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
		<slot />
	</main>
{/key}


<Footer></Footer>
</div>

