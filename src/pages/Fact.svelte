<script>
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";

  import facts from "../data/charts";
  import Stack from "../components/layout/Stack.svelte";

  export let id;
  let visited = new Set();

  function generateRandomIndex() {
    if (visited.size === facts.length) {
      visited.clear();
    }

    let newIndex = Math.floor(Math.random() * facts.length);
    while (newIndex === currentIndex || visited.has(newIndex)) {
      newIndex = generateRandomIndex();
    }
    return newIndex;
  }

  function normalizeId(id) {
    return id.toLowerCase().replace(/\s/g, "-");
  }

  function getFactIndexFromId(id) {
    if (!id) return -1;
    const normalizedId = normalizeId(id);
    return facts.findIndex(fact => normalizeId(fact.title) === normalizedId);
  }

  let currentIndex;
  onMount(() => {
    const factIndex = getFactIndexFromId(id);
    currentIndex = factIndex >= 0 ? factIndex : generateRandomIndex();
  });

  $: currentFact = currentIndex !== undefined ? facts[currentIndex] : null;

  function handleRandomClick() {
    const newIndex = generateRandomIndex();
    navigate(`/${normalizeId(facts[newIndex].title)}`);

    // TODO: we should have a reaction to the navigation to update the currentIndex
    currentIndex = newIndex;
  }
</script>

<style>
  button {
    cursor: pointer;
    border-radius: 0px;
    text-decoration: none;
    padding: 0.75rem 1rem;
    font-size: 0.75rem;
    line-height: 1rem;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 3px;
    transition: all 0.4s ease-in-out;
    border: solid 2px #1f1f1f;
    background: transparent;
    color: #1f1f1f;
  }

  button:active,
  button:hover {
    border: solid 2px #1f1f1f;
    background: #1f1f1f;
    color: #fff;
  }

  iframe {
    width: 100%;
    height: 600px;
    border: 0px none;
  }
  .root {
    min-height: 700px;
  }
</style>

<div class="root">

  <p>
    Escape the
    <a href="https://en.wikipedia.org/wiki/Availability_heuristic">
      Availability Bias
    </a>
    through charts about human progress.
  </p>

  {#if currentFact}
    <Stack>
      <iframe title={currentFact.title} src={currentFact.chartURL} />

      {#each currentFact.relatedArticles as { title, url }}
        <section class="articles">
          <h2>Related articles</h2>
          <ul>
            <li>
              <a href={url}>{title}</a>
            </li>
          </ul>
        </section>
      {/each}

      <button on:click={handleRandomClick}>Get random chart</button>
    </Stack>
  {/if}
</div>
