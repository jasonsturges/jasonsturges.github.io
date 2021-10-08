<svelte:head>
  <title>Jason Sturges</title>
  <meta name="description"
        content="Jason Sturges, avant-garde experimental artist.  Creative professional leveraging technology for immersive experiences - technologist; photographer; musician; explorer; human consciousness" />
  <meta name="keywords" content="artist, technologist, musician, photographer, jason, sturges" />
</svelte:head>


<script>
  import Metro from '../components/Metro.svelte';

  const data = [
    { label: 'Technology', url: '/work/technology', size: '' },
    { label: 'Portraits', url: '/work/photography/portrait', size: 'x2 y2' },
    { label: 'Audio', url: '/work/music/audio', size: '' },
    { label: 'Black and White', url: '/work/photography/black-and-white', size: 'x2 y2' },
    { label: 'Landscape', url: '/work/photography/landscape', size: '' },
    { label: 'Music', url: '/work/music', size: 'y2' },
    { label: 'Scores', url: '/work/music/scores', size: '' },
    { label: 'Resume', url: '/about', size: '' },
    { label: 'Video', url: '/work/video', size: '' },
  ]
</script>

<h1>Works</h1>

<Metro data={data} />
