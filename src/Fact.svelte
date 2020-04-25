<script>
  import { onMount } from "svelte";
  import facts from './data/charts';
  import Stack from "./layout/Stack.svelte";

  function generateRandomIndex() {
    return Math.floor(Math.random() * facts.length);
  }

  let currentIndex;
  onMount(() => {
    currentIndex = generateRandomIndex();
  });

  $: currentFact = currentIndex !== undefined ? facts[currentIndex] : null;

  function handleRandomClick() {
    let newIndex = generateRandomIndex();
    while (newIndex === currentIndex) {
      newIndex = generateRandomIndex();
    }

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
</style>

{#if currentFact}
  <Stack>
    <iframe
      title={currentFact.title}
      src={currentFact.chartURL}
      style="width: 100%; height: 600px; border: 0px none;" />

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
