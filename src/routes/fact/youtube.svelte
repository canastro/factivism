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

<svelte:head>
  <meta property="og:video" content={fact.url} />
  <meta name="twitter:player" content={fact.url} />
</svelte:head>

<iframe title={fact.title} src={fact.url} />
