<script>
  export let author;
</script>

<style>
  blockquote {
    font-style: italic;
    position: relative;
    font-size: 1rem;
    line-height: 1rem;
    padding: 0 1.5rem;
    margin: 1.5rem 0;
  }

  blockquote footer {
    font-size: 1rem;
    font-weight: 700;
    color: #ccc;
    float: right;
  }

  blockquote footer:before {
    content: "\2015";
  }
  blockquote footer:after {
    content: "\201D";
    position: absolute;
    top: 0.28em;
    right: 0;
    font-size: 6em;
    font-style: italic;
    color: #ccc;
    z-index: -1;
  }
</style>

<blockquote>
  <slot />
  <footer>{author}</footer>
</blockquote>
