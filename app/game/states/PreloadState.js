import '~/game/PhaserBridge'

class PreloadState extends Phaser.State {
  preload() {
    this.load.image('background', '~/assets/images/background.png');
  }

  create() {
    const backgroundImage = this.add.image(0, 0,'background').setOrigin(0, 0);
    backgroundImage.setScale(2, 0.8);

    this.state.start('MainMenu');
  }
}

export default PreloadState;