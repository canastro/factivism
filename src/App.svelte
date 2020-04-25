<script>
  import Fact from "./Fact.svelte";
</script>

<style>
  header {
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
  }
  main {
    text-align: center;
    padding: 1em;
	max-width: 640px;
	width: 100%;
	margin: 0 auto;
	flex: 1 0 auto;
  }

  h1 {
	text-transform: uppercase;
	margin-block-end: 0.5rem;
  }

  footer {
	  text-align: center;
	  width: 100%;
	  bottom: 0;
	  background-color: #000;
	  color: #fff;
	  padding: 1rem;
  }
</style>

<header>
  <h1>Factivism</h1>
  <p>
    Escape the
    <a href="https://en.wikipedia.org/wiki/Availability_heuristic">
      Availability Bias
    </a>
    through charts about human progress.
  </p>
</header>

<main>
  <Fact />
</main>

<footer>
  <p>All data is from <a href="https://ourworldindata.org/">ourworldindata</a>, you should check it out.</p>
</footer>
