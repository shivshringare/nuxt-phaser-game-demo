import '~/game/PhaserBridge'

class GameState extends Phaser.State {
  preload() {
    this.load.image('tiles', 'tilesets/platformPack_tilesheet.png');
    this.load.image('spike', 'images/spike.png');
    this.load.atlas('player', 'images/kenney_player.png','images/kenney_player_atlas.json');
    this.load.image('tiles', 'tilesets/platformPack_tilesheet.png');
    this.load.tilemapTiledJSON('map', 'tilemaps/level1.json');
  }

  create() {
    if (this.game.$settings.debug) {
      this.game.time.advancedTiming = true;
    }

    this.add.image(0, 0,'background')

    const map = this.make.tilemap({ key: 'map' });
  }

  render() {
    if (this.game.$settings.debug) {
      this.game.debug.text('FPS: ' + this.game.time.fps || 'FPS: --', 40, 40, "#00ff00");
    }
  }
}

export default GameState;
