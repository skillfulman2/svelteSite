<!-- blog/+page.svelte -->
<script>
	/**
	 * @type {{ title: any; date: any; content: any; categories: any; }}
	 */
	export let data;
	const { title, date, Content, categories } = data;
</script>

{#if categories.length}
	<aside>
		<h2>Posted in:</h2>
		<ul>
			{#each categories as category}
				<li>
					<a href="/blog/category/{category}">
						{category}
					</a>
				</li>
			{/each}
		</ul>
	</aside>
{/if}

<article>
	<h1>{title}</h1>
	<p>Published: {date}</p>
	<Content />
</article>
