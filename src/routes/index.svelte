<script>
  import { goto } from "@sapper/app";
  import Loader from "../components/ui/Loader.svelte";
  goto("fact");
</script>

<style>
  .root {
    min-height: 700px;
    margin: 1rem;
  }
</style>

<svelte:head>
  <title>Factivism</title>
</svelte:head>

<div class="root">
  <p>
    We're everyday bombarded with negative news and often forget how far
    humanity has come. This site to randomly presents you a chart that shows how
    we're progressing in multiple fronts, and that things are not as bad as we
    perceive it.
  </p>

  <Loader />
</div>
