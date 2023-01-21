import '~/game/PhaserBridge'

class MainMenuState extends Phaser.State {
  preload() {
    this.load.audio('theme_music', 'audio/theme.mp3');
  }

  create() {
    this.spacebar = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.add.image(0, 0,'background');
    this.add.image(0, 200, 'platform');
  }

  update() {
    let theme_audio = this.sound.add('theme_music');

    if (this.spacebar.isDown) {
      this.StartGame();
      theme_audio.play();
    }
  }

  StartGame() {
    this.state.start('Game');
  }
}

export default MainMenuState;
