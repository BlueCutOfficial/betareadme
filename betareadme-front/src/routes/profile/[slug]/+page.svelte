<script>
	import LinkButton from "../../../components/LinkButton.svelte";
  export let data;
</script>

<dl>
  <dt>Name</dt>
  <dd>{data.user.displayname}</dd>
  <dt>E-mail</dt>
  <dd>{data.user.email}</dd>
  <dt>Knowledge</dt>
  <dd>{data.user.themes.join(', ')}</dd>
</dl>
<LinkButton url="/profile/academiedesrenards/edit">Edit</LinkButton>