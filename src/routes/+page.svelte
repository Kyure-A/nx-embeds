<script>
  const param = [
    "Yamada Ryo",
    "Gotoh Hitori",
    "Kita Ikuyo",
    "Ijichi Nijika"
  ]
  
</script>

<iframe data-why>
  {#each param as p}
    <p>Hello, {p}!</p>
  {/each}
</iframe>
