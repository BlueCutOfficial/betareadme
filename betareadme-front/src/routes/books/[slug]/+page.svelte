<script>
  import Book from '../../../components/Book.svelte';
	import ToggleButton from '../../../components/ToggleButton.svelte';

  export let data;
  let bookPromise = Promise.resolve(data.book);

  // Current user has subscribed to the book betareading
  let hasSubscribed = false;

  // Toggle the user subscription to betareading
  function subscribe() {
		hasSubscribed = !hasSubscribed;
	}
</script>

<div class="book-page">
  {#await bookPromise}
    <p>...Loading book information 📚</p>
  {:then book}
    <Book {...book} />
  {:catch error}
    <p>Ooops, something went wrong while loading the book 🙈</p>
    <p>{error.message}</p>
  {/await}

  
  {#if hasSubscribed}
    You have volunteered to this betareading! 
  {/if}
  <ToggleButton
    title = {hasSubscribed ? 'Give up reading :s' : 'Want to read this!'}
    modifier={hasSubscribed ? 'active' : 'inactive'}
    on:click={subscribe}
  />
</div>

<style>
  .book-page {
    padding: 20px;
  }
</style>
