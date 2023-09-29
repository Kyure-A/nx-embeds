<script lang="ts">
  import Header from "../header/index.svelte"
  import Cards from "../cards/index.svelte" 
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
  
  figure {
    display: flex;
  }

  .widget {
    display: flex;
    flex-direction: column;
    border-radius: 10px 10px 10px 10px;
    background-color: #FF000A;
  }
  
</style>

<figure id="nx-embeds">
  <div class="widget">
    <Header />
    <Cards />
  </div>
</figure>

