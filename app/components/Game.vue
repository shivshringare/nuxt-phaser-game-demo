<template>
  <div class="phaser-game">
    <div id="phaser-game-container"></div>
  </div>
</template>

<script>
  import settings from '~/game/Settings'

  export default {

    data() {
      return {
        game: null
      }
    },

    mounted() {
      this.game = new Game(settings);
    },
  }
</script>