<script>
  import Quote from "../../components/ui/quote.svelte";

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
  <meta property="og:image" content={fact.thumbnail} />
  <meta name="twitter:image" content={fact.thumbnail} />
</svelte:head>

<iframe title={fact.title} src={fact.chartURL} />

{#each fact.quotes as { text, author }}
  <Quote {author}>{text}</Quote>
{/each}

{#each fact.relatedArticles as { title, url }}
  <section class="articles">
    <h2>Related articles</h2>
    <ul>
      <li>
        <a href={url}>{title}</a>
      </li>
    </ul>
  </section>
{/each}
