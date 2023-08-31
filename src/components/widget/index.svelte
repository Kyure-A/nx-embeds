<script lang="ts">
  function returnUnit (hour: number): "hour" | "hours" {
    if (hour == 1.0) return "hour";
    else return "hours";
  }
  
  const params = [
  {
    title: 'ポケットモンスター バイオレット',
    icon: 'https://atum-img-lp1.cdn.nintendo.net/i/c/1427016279c04de0b080b8dd26e209e0_256',
    total_played_hours: 397.1
  },
  {
    title: '大乱闘スマッシュブラザーズ SPECIAL',
    icon: 'https://atum-img-lp1.cdn.nintendo.net/i/c/1adfe782967548c99659c27c9a3bca56_256',
    total_played_hours: 82.8
  },
  {
    title: 'Pokémon HOME',
    icon: 'https://atum-img-lp1.cdn.nintendo.net/i/c/87ded4425cc147b580039b2f741a682c_256',
    total_played_hours: 0.2
  },
  {
    title: 'ファミリーコンピュータ Nintendo Switch Online',
    icon: 'https://atum-img-lp1.cdn.nintendo.net/i/c/2d94c428e21e4742af9e77cec91669a3_256',
    total_played_hours: 0.3
  },
  {
    title: 'スーパーファミコン Nintendo Switch Online',
    icon: 'https://atum-img-lp1.cdn.nintendo.net/i/c/c4cf8c8a65d5447e8f1fcc12651e279b_256',
    total_played_hours: 0.1
  },
  {
    title: 'ゲームボーイ Nintendo Switch Online',
    icon: 'https://atum-img-lp1.cdn.nintendo.net/i/c/e19e534e0d2c49af9245edbeccb5f3b1_256',
    total_played_hours: 0.1
  },
  {
    title: 'TETRIS 99',
    icon: 'https://atum-img-lp1.cdn.nintendo.net/i/c/c1993990ec0848a490517b98acdc0c9a_256',
    total_played_hours: 0
  },
  {
    title: 'スーパーカービィハンターズ',
    icon: 'https://atum-img-lp1.cdn.nintendo.net/i/c/81737d0151174d57823e75032a7fabe1_256',
    total_played_hours: 0
  }
];
  
</script>

<style>
  
</style>

{#each params as p}
  <figure class="md:flex">
    <div class="flex flex-row">
      <div>
	<img src="{p.icon}" width="100px" height="100px">
      </div>
      <div class="px-2 flex flex-col">
	<div class="bg-gray-900 text-white">{p.title}</div>
	<div class="text-right">{p.total_played_hours} {returnUnit(p.total_played_hours)}</div>
      </div>
    </div>
  </figure>
{/each}
