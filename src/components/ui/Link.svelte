<script>
  export let href;
</script>

<style>
  a {
    display: block;
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

  a:active,
  a:hover {
    border: solid 2px #1f1f1f;
    background: #1f1f1f;
    color: #fff;
  }
</style>

<a class="random" {href}>
  <slot />
</a>
