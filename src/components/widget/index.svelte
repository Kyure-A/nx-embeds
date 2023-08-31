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

  const logo_url = "https://upload.wikimedia.org/wikipedia/commons/a/a0/Nintendo_Switch_logo%2C_horizontal.png";
  const icon_size = "80";
  
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
    background-color: #FF000A; /* #F9F9F9; */
  }

  .header {
    display: flex;
    flex-direction: row;
    height: 60px;
  }
  
  .header-title {
    margin: 0 auto;
    color: #FFFFFF;
    padding-top: 18px;
    font-family: 'Noto Sans JP', sans-serif;
  }

  .header-logo {
    margin: 0 auto;
    padding-top: 10px;
  }

  .card {
    display: flex;
    flex-direction: row;
    background-color: #F9F9F9;
    border: 1px solid #DDDDDD;
  }

  .icon-in-card {
    display: flex;
    flex-direction: column;
    padding: 5px;
  }
  
  .text-in-card {
    display: flex;
    flex-direction: column;
    width: 260px;
    height: 80px;
    padding: 5px;
  }

  .title {
    font-size: 14px;
    font-family: 'Noto Sans JP', sans-serif;
  }

  .playtime {
    margin: 0 0 0 auto;
    padding-top: 20px;
    font-size: 14px;
    font-family: 'Noto Sans JP', sans-serif;
  }
  
</style>
<figure>
  <div class="widget">
    <div class="header">
      <img class="header-logo" width="98px" height="39px" src="{logo_url}">
      <div class="header-title">Most Played Games</div>
    </div>
    {#each params as p}
      <div class="card">
	<img class="icon-in-card"src="{p.icon}" width="{icon_size}px" height="{icon_size}px">
	<div class="text-in-card">
	  <div class="title">{p.title}</div>
	  <div class="playtime">{p.total_played_hours} {returnUnit(p.toral_played_hours)}</div>
	</div>
      </div>
    {/each}
  </div>
</figure>
