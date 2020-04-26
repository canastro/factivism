<script>
  import { Router, Link, Route } from "svelte-routing";
  import Fact from "./pages/Fact.svelte";
  import About from "./pages/About.svelte";
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
    max-width: 640px;
    width: 100%;
    margin: 0 auto;
    flex: 1 0 auto;
  }

  h1 {
    text-transform: uppercase;
    margin-block-end: 0.5rem;
  }

  h1 :global(a) {
    text-decoration: none;
    color: #000;
  }

  footer {
    text-align: center;
    width: 100vw;
    bottom: 0;
    background-color: #000;
    color: #fff;
    margin-left: -1rem;
    margin-right: -1rem;
    padding: 1rem;
  }

  footer p + p {
    margin-top: 0.5rem;
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

  <footer>
    <p>
      All data is from
      <a href="https://ourworldindata.org/">ourworldindata</a>
      , you should check it out.
    </p>
    <p>© 2020. All Rights Reserved.</p>
  </footer>
</Router>
