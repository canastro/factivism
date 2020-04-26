<script>
  import { Router, Link, Route } from "svelte-routing";
  import Fact from "./pages/Fact.svelte";
  import About from "./pages/About.svelte";
  import Footer from "./components/ui/Footer.svelte";
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

<Router>
  <header>
    <h1>
      <Link to="/">Factivism</Link>
    </h1>
  </header>

  <main>
    <Route>
      <Fact />
    </Route>
    <Route path="/:id" let:params>
      <Fact id={params.id} />
    </Route>
    <Route path="about">
      <About />
    </Route>
  </main>

  <Footer />
</Router>
