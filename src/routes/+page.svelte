<script lang="ts">
  const param = [
    {
      name: "Pokémon Violet",
      icon: "https://assets.nintendo.eu/image/upload/f_auto/q_auto/t_product_tile_desktop/v1/MNS/NOE/70010000053972/1.1_ProductTile_Switch_PokemonViolet_KeyArt_enNOE?_a=ATAK9AA0",
      url:  "https://store-jp.nintendo.com/list/software/70010000053970.html",
      playtime: "350 hours over",
    },
    {
      name: "Super Smash Bros. Ultimate",
      icon: "https://external-preview.redd.it/n4jv213CGeaYvaHmwNOpOb_X4Q0CddoAQd2G90GAgkU.jpg?auto=webp&s=27b78230c366c71b811480a492bfbdb05894000a",
      url:  "https://store-jp.nintendo.com/list/software/70010000012085.html",
      playtime: "80 hours over",
    },
  ]
  
</script>

<iframe data-why width="500px" height="600px">
  <p>Most Played Games</p>
  {#each param as p}
    <figure class="md:flex">
      <div class="flex flex-row">
	<div>
	  <img src="{p.icon}" width="100px" height="100px">
	</div>
	
	<div class="flex flex-col">
	  <div class="bg-gray-900 text-white">{p.name}</div>
	  <div>{p.playtime}</div>
	</div>
	
      </div>
    </figure>
  {/each}
</iframe>
