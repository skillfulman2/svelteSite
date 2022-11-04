<script>
	import Globe from '../lib/components/Globe.svelte';
	import Section from '../lib/components/Section.svelte';
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
		<h2><strong>Hi, I’m Ryan</strong>. 
		</h2>
	  </div>
  
	  <div class="intro__body"> 
		<h3></h3>
  
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
	.intro {
	  width: 100%;
	  position: relative;
	  margin-top: var(--wholeNote);
	  max-width: var(--maxWidth);
	
	  @media (min-width: 200px) {
		width: 100%;
		max-width: unset;
		display: grid;
		grid-template-columns: 3fr minmax(22rem, 2fr);
		gap: 0 calc(var(--wholeNote) * 2);
	
		&__body {
		  max-width: 30rem;
		  grid-row: 1 / 3;
		  grid-column: 2 / 3;
	
		  p {
			margin: 0;
		  }
		}
	  }
	
	  h2 {
		font-size: 2.5rem;
		font-size: clamp(1.8rem, calc(1rem + 3vw), 4rem);
		margin-bottom: var(--wholeNote);
		font-weight: normal;
	
		strong {
		  background: var(--yellow);
		  color: var(--darkerGray);
		}
	
		&::before {
		  display: none;
		}
	  }
	
	  h3 {
		font-size: 1.3rem;
		margin: 0 0 calc(var(--quarterNote) / 2);
		position: relative;
		z-index: 1;
	
		~ h3 {
		  margin-top: var(--halfNote) ;
		}
	  }
	}
	</style>