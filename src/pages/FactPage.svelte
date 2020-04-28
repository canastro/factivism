<script>
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";

  import facts from "../data/charts";
  import Fact from "../components/ui/Fact.svelte";
  import Quote from "../components/ui/Quote.svelte";
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

  function getFactByIndex(index) {
    if (!index) return null;

    return Object.assign(
      {},
      { title: "", chartURL: "", relatedArticles: [], quotes: [] },
      facts[currentIndex]
    );
  }

  let currentIndex;
  onMount(() => {
    const factIndex = getFactIndexFromId(id);
    currentIndex = factIndex >= 0 ? factIndex : generateRandomIndex();
  });

  $: currentFact = getFactByIndex(currentIndex);

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
    margin-top: 1rem;
  }

  button:active,
  button:hover {
    border: solid 2px #1f1f1f;
    background: #1f1f1f;
    color: #fff;
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
    <Fact fact={currentFact} />
  {/if}

  <button on:click={handleRandomClick}>Get random chart</button>
</div>
