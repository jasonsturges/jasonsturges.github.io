<script>
	import AvantGarde from '../components/AvantGarde.svelte';
</script>

<style>
	.cover {
		padding: 20px;
		width: 310px;
		margin: 20px auto;
		text-align: center;
	}

	@media only screen and (min-width: 610px) {
		.cover {
			width: 610px;
		}
	}

	.cover p {
		margin: 0;
		font-family: playfair-display, Arial, serif;
	}

	.cover .author {
		font-size: 2em;
		letter-spacing: 0.65em;
		text-transform: uppercase;
		font-weight: 100;
		line-height: 1em;
		margin-bottom: 1.6em;
	}

	.cover .author:first-letter {
		font-size: 2.2em;
		display: inline-block;
	}

	.cover .tagline {
		font-family: cardo, serif;
		font-style: normal;
		font-weight: 400;
		font-size: 1.2em;
		letter-spacing: 0.2em;
		margin: 1em 0;
		text-transform: capitalize;
	}
</style>

<svelte:head>
	<title>Jason Sturges</title>
</svelte:head>

<section class="cover">
	<p class="author">Jason Sturges</p>
	<AvantGarde />

	<p class="tagline">Experimental artist</p>
</section>
