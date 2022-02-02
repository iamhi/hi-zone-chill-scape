import * as Phaser from 'phaser';

import BootScene from '@src/scenes/BootScene';
import LoadingScene from '@src/scenes/LoadingScene';
import MainScene from '@src/scenes/MainScene';

import './index.css';

const config = {
	name: 'app',
	type: Phaser.AUTO,
	width: 1280,
	height: 720,
	scene: [
		BootScene,
		LoadingScene,
		MainScene,
	],
	backgroundColor: '#68b5d6',
};

window.game = new Phaser.Game(config);
