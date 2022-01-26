import * as Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
	constructor() {
		super({ key: 'BootScene' });
	}

	preload() {
		this.load.image('mustang', '/test/mustang-gt/mustang-full.gif');
	}

	create() {
		this.add.image(
			window.game.config.width / 2,
			window.game.config.height / 2,
			'mustang',
		);
	}
}
