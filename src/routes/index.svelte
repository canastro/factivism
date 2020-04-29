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
    Escape the
    <a href="https://en.wikipedia.org/wiki/Availability_heuristic">
      Availability Bias
    </a>
    through charts about human progress.
  </p>

  <Loader />
</div>
