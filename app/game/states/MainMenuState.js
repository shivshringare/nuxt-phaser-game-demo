import '~/game/PhaserBridge'

class MainMenuState extends Phaser.State {
  create() {
    this.spacebar = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
    this.add.image(0, 0, 'background')
  }

  update() {
    if (this.spacebar.isDown) {
      this.StartGame();
    }
  }

  StartGame() {
    this.state.start('Game');
  }
}

export default MainMenuState;
