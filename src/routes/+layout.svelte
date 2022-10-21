<!-- +layout.svelte -->
<script>
    import Header from '$lib/components/Header.svelte'
    import Section from '../lib/components/Section.svelte'
    import '$lib/styles/style.scss'
    </script>
    
    <Header />
    <!-- The rest of the HTML here -->

<main>
  <slot />
</main>

