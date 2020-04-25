<script>
  import { onMount } from "svelte";
  const facts = [
    {
      title: "Life expectancy",
      chartURL: "https://ourworldindata.org/grapher/life-expectancy?tab=chart"
    },
    {
      title: "Daily supply of calories",
      chartURL: "https://ourworldindata.org/grapher/food-supply-kcal?tab=chart"
    },
    {
      title: "Child mortality",
      chartURL:
        "https://ourworldindata.org/grapher/child-mortality-around-the-world?tab=chart"
    },
    {
      title: "Number of new cases of HIV, 1990 to 2017",
      chartURL:
        "https://ourworldindata.org/grapher/new-cases-of-hiv-infection?tab=chart"
    },
    {
      title: "Malaria incidence per 1,000 population, 2000 to 2015",
      chartURL:
        "https://ourworldindata.org/grapher/malaria-incidence-per-1000-population?tab=chart"
    },
    {
      title: "World GDP over the last two millennia",
      chartURL:
        "https://ourworldindata.org/grapher/world-gdp-over-the-last-two-millennia?country=OWID_WRL"
    },
    {
      title: "GDP per capita, 1870 to 2016",
      chartURL:
        "https://ourworldindata.org/grapher/average-real-gdp-per-capita-across-countries-and-regions?country=OWID_WRL"
    }
  ];

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

  iframe {
    padding: 20px;
  }
</style>

{#if currentFact}
  <iframe
    title={currentFact.title}
    src={currentFact.chartURL}
    style="width: 100%; height: 600px; border: 0px none;" />
  <button on:click={handleRandomClick}>Get random chart</button>
{/if}
