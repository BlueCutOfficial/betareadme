<script>
	import { page } from '$app/stores';
</script>

{#if $page.data.session}
	<nav>
		<a href="/">Home</a>
		<a href="/profile/academiedesrenards">Profile</a>
		<a href="/books">Books</a>
		<a href="/auth/signout" class="sign-button" data-sveltekit-preload-data="off">
			Sign out
		</a>
	</nav>

	<slot />
{:else}
	<a href="/auth/signin" class="sign-button" data-sveltekit-preload-data="off">
		Sign in
	</a>
{/if}

<style>
  .sign-button {
    background-color: #009fff;
    border-radius: 4px;
    border-style: none;
    color: #eeeeee;
    filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.2));
    font-family: 'Times New Roman', Times, serif;
    font-size: medium;
    padding: 8px;
    text-decoration: none;
    width: fit-content;
  }
  .sign-button:hover {
    background-color: #0093ee;
    box-shadow: inset 3px 3px 4px rgba(0,0,0,0.1);
    filter: none;
  }
</style>