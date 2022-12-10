<script>
	import Main from '../lib/components/Main.svelte'
	import HomepageLinkList from '$lib/components/HomepageLinkList.svelte';
</script>


<svelte:head>
	<title>Ryan Remaly</title>
	<meta property="og:title" content="Ryan Remaly" />
	<meta data-key="description" property="og:description" name="description" content="Soccer coach">
  	<meta property="og:image" content="https://>RyanRemaly.dev/images/site-image.png" />
	<meta name="twitter:image" content="https://>RyanRemaly.dev/images/site-image.png"/>
</svelte:head>

<Main>
	<div class="intro">
	  <div class="intro__headline">
		
	  </div>
  
	  <div class="intro__body"> 
		<h3>Currently: </h3>
  
		<p>
		  Senior Engineer at CAE
		</p>
  
		<p>
		  
		</p>
  
		<h3>Personally:</h3>
		<p>
		  Soccer Coach; Greenthumb
		</p>
	  
	  </div>
	  <HomepageLinkList />
	</div>
  </Main>
  <style lang="scss">
	
	</style>