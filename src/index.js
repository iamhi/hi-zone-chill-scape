import * as Phaser from 'phaser';
import BootScene from '@src/scenes/BootScene';

const config = {
	name: 'app',
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	scene: [BootScene],
};

window.game = new Phaser.Game(config);
