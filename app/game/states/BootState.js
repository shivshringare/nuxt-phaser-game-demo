import '~/game/PhaserBridge'

class BootState extends Phaser.State {
  init() {
    this.input.maxPointers = 1
    this.scale.pageAlignHorizontally = true;
  }

  preload() {}

  create() {
    this.state.start('Preload');
  }
}

export default BootState;
