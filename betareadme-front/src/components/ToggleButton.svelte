<script>
  export let title = 'Toggle Button';
  export let modifier = 'inactive';
  export let type = 'button';
</script>

<button
  class={modifier}
  type={type}
  on:click
>
  {title}
</button>

<style>
  button {
    border-radius: 4px;
    border-style: none;
    color: #eeeeee;
    font-family: 'Times New Roman', Times, serif;
    font-size: medium;
    padding: 8px;
  }

  button.active {
    background-color: #c22400;
    box-shadow: inset 3px 3px 4px rgba(0,0,0,0.2);
  }

  button.inactive {
    background-color: #009fff;
    filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.2));
  }
</style>