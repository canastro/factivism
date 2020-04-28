<script>
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";

  import Quote from "./Quote.svelte";
  import Stack from "../layout/Stack.svelte";

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
  <meta property="og:url" content={window.location.href} />
  <meta property="og:title" content={fact.title} />
  <meta property="og:description" content={`A chart about ${fact.title} from ourworldindata.org`} />
  <meta property="og:image" content={fact.thumbnail} />
  <meta property="og:site_name" content="Factivism" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@canastro" />
  <meta name="twitter:creator" content="@canastro" />
  <meta name="twitter:title" content={fact.title} />
  <meta name="twitter:description" content={`A chart about ${fact.title} from ourworldindata.org`} />
  <meta name="twitter:image" content={fact.thumbnail} />
</svelte:head>

<Stack>
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
</Stack>
