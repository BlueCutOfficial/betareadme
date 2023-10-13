<script>
	import { page } from '$app/stores';
	import './typography.css';
</script>

{#if $page.data.session}
	<nav>
		<a href="/">Home</a>
		<a href="/profile/academiedesrenards">Profile</a>
		<a href="/books">Books</a>
		<a data-testid="link-sign-out" href="/auth/signout" class="sign-button out" data-sveltekit-preload-data="off">
			Sign out
		</a>
	</nav>

	<div class="main-content">
		<slot />
	</div>
{:else}
	<div class="main-content">
		<a data-testid="link-sign-in" href="/auth/signin" class="sign-button in" data-sveltekit-preload-data="off">
			Sign in
		</a>
	</div>
{/if}

<style>
	:global(body) {
		margin: 0;
		background-color: var(--elevation-container);
	}
	nav {
		background-color: var(--elevation-medium);
		padding: var(--px10);
		min-height: 38px;
	}

	.main-content {
		padding: var(--px32);
	}

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

	.sign-button.out {
		float: right;
	}
</style>