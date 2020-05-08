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
  <meta property="og:video:url" content={fact.url} />
  <meta property="og:video:type" content="text/html" />
  <meta name="twitter:card" content="player">
  <meta name="twitter:player" content={fact.url} />
  <meta name="twitter:player:width" content="1280">
  <meta name="twitter:player:height" content="720">
</svelte:head>

<iframe title={fact.title} src={fact.url} />
