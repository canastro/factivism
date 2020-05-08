<script>
  export let fact;
</script>

<style>
  iframe {
    width: 100%;
    height: 600px;
    border: 0px none;
  }
</style>

<iframe title={fact.title} src={fact.url} />
