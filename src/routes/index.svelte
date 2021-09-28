<svelte:head>
  <title>Jason Sturges</title>
  <meta name="description"
        content="Jason Sturges, avant-garde experimental artist.  Creative professional leveraging technology for immersive experiences - technologist; photographer; musician; explorer; human consciousness" />
  <meta name="keyboards" content="artist, technologist, musician, photographer, jason, sturges" />
</svelte:head>

<script>
  import AvantGarde from '../components/AvantGarde.svelte';
  import Avatar from '../components/Avatar.svelte';
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

  .cover .author {
    margin: 0;
    font-family: playfair-display, Arial, serif;
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

  .cover .statement {
    margin: 0 64px;
  }
</style>

<section class="cover">
  <p class="author">Jason Sturges</p>
  <AvantGarde />
  <p class="tagline">Experimental artist</p>

  <Avatar />

  <p class="statement">Creative professional leveraging technology for immersive experiences &mdash; technologist;
    musician; photographer; explorer; human consciousness</p>
</section>
