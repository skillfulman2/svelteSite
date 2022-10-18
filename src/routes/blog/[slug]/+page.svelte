<!-- blog/+page.svelte -->
<script>
    /**
	 * @type {{ title: any; date: any; content: any; }}
	 */
     export let data;
     const {title, date, Content} = data;
  </script>
  
  <article>
    <h1>{ title }</h1>
    <p>Published: {date}</p>
   <Content />
  </article>