import * as Phaser from 'phaser';

import BootScene from '@src/scenes/BootScene';

import './index.css';

const config = {
	name: 'app',
	type: Phaser.AUTO,
	width: 1280,
	height: 720,
	scene: [BootScene],
};

window.game = new Phaser.Game(config);
