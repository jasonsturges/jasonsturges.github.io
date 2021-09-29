<style>
  .metro {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    max-width: 900px;
    margin: 60px auto;
    gap: 5px;
    grid-auto-flow: row dense;
    color: #efefef;
  }

  .metro a {
    text-decoration: none;
  }

  .metro .item {
    background: #0b92e0;
    background-image: var(--background-img);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 120px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 1em;
  }

  .metro .item.x2 {
    grid-column: span 2;
  }

  .metro .item.y2 {
    grid-row: span 2;
  }

  .metro .item:nth-child(20n+1) {
    background-color: #0b92e0;
  }

  .metro .item:nth-child(20n+2) {
    background-color: #a4c400;
  }

  .metro .item:nth-child(20n+3) {
    background-color: #ffb900;
  }

  .metro .item:nth-child(20n+4) {
    background-color: #FA6800;
  }

  .metro .item:nth-child(20n+5) {
    background-color: #DC4FAD;
  }

  .metro .item:nth-child(20n+6) {
    background-color: #76608A;
  }

  .metro .item:nth-child(20n+7) {
    background-color: #CE352C;
  }

  .metro .item:nth-child(20n+8) {
    background-color: #E3C800;
  }

  .metro .item:nth-child(20n+9) {
    background-color: #1BA1E2;
  }

  .metro .item:nth-child(20n+10) {
    background-color: #647687;
  }

  .metro .item:nth-child(20n+11) {
    background-color: #6D8764;
  }

  .metro .item:nth-child(20n+12) {
    background-color: #87794E;
  }

  .metro .item:nth-child(20n+13) {
    background-color: #00ABA9;
  }

  .metro .item:nth-child(20n+14) {
    background-color: #008A00;
  }

  .metro .item:nth-child(20n+15) {
    background-color: #0050EF;
  }

  .metro .item:nth-child(20n+16) {
    background-color: #AA00FF;
  }

  .metro .item:nth-child(20n+17) {
    background-color: #F0A30A;
  }

  .metro .item:nth-child(20n+18) {
    background-color: #60A917;
  }

  .metro .item:nth-child(20n+19) {
    background-color: #A20025;
  }

  .metro .item:nth-child(20n+20) {
    background-color: #825A2C;
  }


  .metro img {
    max-width: 100%;
    transition: 0.2s all ease;
  }
</style>

<script>
  /**
   * Example: { label: '', url: '', size: '', backgroundImage: '' },
   *
   * Test case:
   ```js
   const data = [
     { label: '1', url: '', size: '' },
     { label: '2', url: '', size: 'x2 y2' },
     { label: '3', url: '', size: '' },
     { label: '4', url: '', size: 'x2 y2' },
     { label: '5', url: '', size: '' },
     { label: '6', url: '', size: 'y2' },
     { label: '7', url: '', size: '' },
     { label: '8', url: '', size: '' },
     { label: '9', url: '', size: '' },
     { label: '10', url: '', size: '' },
     { label: '11', url: '', size: '' },
     { label: '12', url: '', size: 'x2 y2' },
     { label: '13', url: '', size: '' },
     { label: '14', url: '', size: 'y2' },
     { label: '15', url: '', size: '' },
     { label: '16', url: '', size: '' },
     { label: '17', url: '', size: '' },
     { label: '18', url: '', size: '' },
     { label: '19', url: '', size: '' },
     { label: '20', url: '', size: '' }
   ]
   ```
   */
  export let data = [];
</script>

<div class="metro">
  {#each data as { label, url, size, backgroundImage }, i}
    <div class="item {size}" style="--background-img: url({backgroundImage})">
      <a href="{url}">
        <h2>{label}</h2>
      </a>
    </div>
  {/each}
</div>
