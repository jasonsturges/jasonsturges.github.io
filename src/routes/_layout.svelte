<script>
  import Nav from '../components/Nav.svelte';
  import Footer from '../components/Footer.svelte';

  export let segment;
</script>

<style>
  main {
    max-width: 56em;
    margin: 0 auto;
  }
</style>

<Nav {segment} />

<main>
  <slot></slot>
</main>

<Footer />
