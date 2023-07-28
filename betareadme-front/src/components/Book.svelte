<script>
	export let title;
  export let language;
  export let pitch;
  export let themes;
</script>

<h1>{title}</h1>
<p>Language: {language}</p>
<p>{@html pitch}</p>
<p>👀 Looking for knowledge in {themes.join(' - ')}</p>

<style>
  h1 {
    font-family: Verdana, Tahoma, sans-serif;
    font-size: larger;
  }

  p {
    font-family: 'Times New Roman', Times, serif;
  }
</style>