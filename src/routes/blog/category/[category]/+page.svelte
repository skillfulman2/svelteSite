<!-- src/routes/blog/+page.svelte -->
<script>
	export let data;
</script>

<h1>Blog</h1>
{#if data.posts.length}<h2>
		{data.category}
	</h2>
{:else}
	<h2>No Posts</h2>
{/if}
<ul>
	{#each data.posts as post}
		<li>
			<h2>
				<a href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			Published {post.meta.date}
		</li>
	{/each}
</ul>
