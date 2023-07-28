<script>
	export let data;
</script>

<ul>
	{#each data.books as book}
	  <li>
			<a href="/books/{book.slug}">{book.title}</a>
	  </li>
	{/each}
</ul>