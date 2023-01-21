import '~/game/PhaserBridge'

class PreloadState extends Phaser.State {
  preload() {
    this.load.image('background', require('assets/images/background.png'));
  }

  create() {
    this.state.start('MainMenu');
  }
}

export default PreloadState;
