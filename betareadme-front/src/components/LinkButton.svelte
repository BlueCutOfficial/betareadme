<script>
  export let url = '/'; 
</script>

<a href={url}><slot /></a>

<style>
  a {
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
  a:hover {
    background-color: #0093ee;
    box-shadow: inset 3px 3px 4px rgba(0,0,0,0.1);
    filter: none;
  }
</style>