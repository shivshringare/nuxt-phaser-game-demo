import '~/game/PhaserBridge'

import BootState from './states/BootState'
import PreloadState from './states/PreloadState';
import MainMenuState from './states/MainMenuState';
import GameState from './states/GameState';

class Game extends Phaser.Game {
  constructor(settings) {
    super(settings.width, settings.height, Phaser.AUTO, settings.containerId, null);

    this.$settings = settings;

    this.state.add('Boot', BootState, false);
    this.state.add('Preload', PreloadState, false);
    this.state.add('MainMenu', MainMenuState, false);
    this.state.add('Game', GameState, false);

    this.state.start('Boot');
  }
}

export default Game;
