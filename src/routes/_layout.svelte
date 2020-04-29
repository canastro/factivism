<script>
  import Footer from "../components/ui/Footer.svelte";
</script>

<style>
  main {
    text-align: center;
    max-width: 640px;
    width: 100%;
    margin: 0 auto;
    flex: 1 0 auto;
  }

  h1 {
    text-align: center;
    text-transform: uppercase;
    margin-block-end: 0.5rem;
  }

  h1 :global(a) {
    text-decoration: none;
    color: #000;
  }
</style>

<header>
  <h1>
    <a href to="/">Factivism</a>
  </h1>
</header>

<main>
  <slot />
</main>

<Footer />
