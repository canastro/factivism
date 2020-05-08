<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`fact/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { fact: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Link from "../../components/ui/link.svelte";
  import Stack from "../../components/layout/stack.svelte";
  import OurWorldInData from "./our-world-in-data.svelte";
  import Youtube from "./youtube.svelte";

  export let fact;
</script>

<style>
  .root {
    min-height: 700px;
    margin: 1rem;
  }
</style>

<svelte:head>
  <title>{`Factivism: ${fact.title}`}</title>
  <meta property="og:url" content={`https://factivism.io/fact/${fact.slug}`} />
  <meta property="og:title" content={fact.title} />
  <meta
    property="og:description"
    content={`A chart about ${fact.title} from ourworldindata.org`} />
  <meta property="og:image" content={fact.thumbnail} />
  <meta property="og:site_name" content="Factivism" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@canastro" />
  <meta name="twitter:creator" content="@canastro" />
  <meta name="twitter:title" content={fact.title} />
  <meta
    name="twitter:description"
    content={`A chart about ${fact.title} from ourworldindata.org`} />
  <meta name="twitter:image" content={fact.thumbnail} />
</svelte:head>

<div class="root">
  <p>
    We're everyday bombarded with negative news and often forget how far
    humanity has come. This site to randomly presents you a chart that shows how
    we're progressing in multiple fronts, and that things are not as bad as we
    perceive it.
  </p>
  <Stack>

    {#if fact.type === 'youtube'}
      <Youtube {fact} />
    {:else}
      <OurWorldInData {fact} />
    {/if}
    <Link href="/fact">Get random page!</Link>
  </Stack>
</div>
