import '~/game/PhaserBridge'

class PreloadState extends Phaser.State {
  preload() {
    this.load.image('background', 'images/background.png');
    this.load.image('platform', 'images/level1.png');
    this.load.tilemapTiledJSON('map', 'tilemaps/level1.json');
  }

  create() {
    this.state.start('MainMenu');
  }
}

export default PreloadState;
