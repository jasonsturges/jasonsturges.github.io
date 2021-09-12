<script>
	import Nav from '../components/Nav.svelte';
	import Social from '../components/Social.svelte';

	export let segment;
</script>

<style>
	main {
		max-width: 56em;
		margin: 0 auto;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Social />
