<script>
	import ToggleButton from "../../../../components/ToggleButton.svelte";

  export let data;

  let editedThemes = [...data.user.themes];

  function addTheme() {
		editedThemes = editedThemes.concat('');
	}
</script>

<form method="POST" action="?/update">
  <p>What are your knowledge fields?</p>
  <ul>
    {#each editedThemes as theme}
      <li>
        <input
          name="knowledge-field"
          type="text"
          bind:value={theme} 
        />
      </li>
    {/each}
    <ToggleButton
      title = '+'
      modifier='inactive'
      on:click={addTheme}
    />
  </ul>
  <ToggleButton
    title = 'Save'
    modifier='inactive'
    type='submit'
  />
</form>