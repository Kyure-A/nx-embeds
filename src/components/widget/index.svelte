<script lang="ts">
  function returnUnit (hour: number): "hour" | "hours" {
    if (hour == 1.0) return "hour";
    else return "hours";
  }

  function countCharacter(str: string): number {
    const isJapanese = (str: string): Boolean => {
        return (str.match(/^[\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf]+$/)) ? true : false
    }

    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (isJapanese(str.charAt(i))) {
            count += 2;
        }
        else count++;
    }
    
    return count;
  }
  const params = [
  {
    title: 'ポケットモンスター バイオレット',
    id: '01008f6008c5e000',
    icon: 'https://atum-img-lp1.cdn.nintendo.net/i/c/1427016279c04de0b080b8dd26e209e0_256',
    total_played_hours: 397.1
  },
  {
    title: '大乱闘スマッシュブラザーズ SPECIAL',
    id: '01006a800016e000',
    icon: 'https://atum-img-lp1.cdn.nintendo.net/i/c/1adfe782967548c99659c27c9a3bca56_256',
    total_played_hours: 82.8
  },
  {
    title: 'ファミリーコンピュータ Nintendo Switch Online',
    id: '0100b4e00444c000',
    icon: 'https://atum-img-lp1.cdn.nintendo.net/i/c/2d94c428e21e4742af9e77cec91669a3_256',
    total_played_hours: 0.3
  },
  {
    title: 'Pokémon HOME',
    id: '010015f008c54000',
    icon: 'https://atum-img-lp1.cdn.nintendo.net/i/c/87ded4425cc147b580039b2f741a682c_256',
    total_played_hours: 0.2
  },
  {
    title: 'ゲームボーイ Nintendo Switch Online',
    id: '0100395011044000',
    icon: 'https://atum-img-lp1.cdn.nintendo.net/i/c/e19e534e0d2c49af9245edbeccb5f3b1_256',
    total_played_hours: 0.1
  },
  {
    title: 'スーパーファミコン Nintendo Switch Online',
    id: '0100e8600c504000',
    icon: 'https://atum-img-lp1.cdn.nintendo.net/i/c/c4cf8c8a65d5447e8f1fcc12651e279b_256',
    total_played_hours: 0.1
  },
  {
    title: 'スーパーカービィハンターズ',
    id: '01003fb00c5a8000',
    icon: 'https://atum-img-lp1.cdn.nintendo.net/i/c/81737d0151174d57823e75032a7fabe1_256',
    total_played_hours: 0
  },
  {
    title: 'TETRIS 99',
    id: '010040600c5ce000',
    icon: 'https://atum-img-lp1.cdn.nintendo.net/i/c/c1993990ec0848a490517b98acdc0c9a_256',
    total_played_hours: 0
  }
]
  const logo_url = "switch-logo.png" // "https://upload.wikimedia.org/wikipedia/commons/a/a0/Nintendo_Switch_logo%2C_horizontal.png";
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
    background-color: #FF000A;
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
    padding: 10px;
  }

  .card {
    display: flex;
    flex-direction: row;
    background-color: #F9F9F9;
    border: 1px solid #DDDDDD;
    position: relative;
  }

  .card a {
    position: absolute;
    top: 0;
    left: 0;
    height:100%;
    width: 100%;
  }

  .card a:hover{
    opacity: 0.1;
    background-color: #000000;
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

  .title-small {
    font-size: 10px;
    font-family: 'Noto Sans JP', sans-serif;
  }

  .title-middle {
    font-size: 12px;
    font-family: 'Noto Sans JP', sans-serif;
  }
  
  .title-large {
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

<figure id="nx-embeds">
  <div class="widget">
    <div class="header">
      <div class="header-logo"><img src="{logo_url}" width="98px" height="39px"></div>
      <div class="header-title"><a href="https://github.com/Kyure-A/nx-embeds">Most Played Games</a></div>
    </div>
    {#each params as p}
      <div class="card">
	<a href="https://fancy.org.uk/api/nxapi/title/{p.id}/redirect"></a>
	<img class="icon-in-card" src="{p.icon}" width="{icon_size}px" height="{icon_size}px">
	<div class="text-in-card">
	  {#if countCharacter(p.title) > 43}
	    <div class="title-small">{p.title}</div>
	  {:else if countCharacter(p.title) > 36}
	    <div class="title-middle">{p.title}</div>
	  {:else}
	    <div class="title-large">{p.title}</div>
	  {/if}
	  <div class="playtime">{p.total_played_hours} {returnUnit(p.toral_played_hours)}</div>
	</div>
      </div>
    {/each}
  </div>
</figure>

