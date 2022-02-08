import * as Phaser from 'phaser';

export default class LoadingScene extends Phaser.Scene {
	loadingMessage = 'loading...';

	constructor() {
		super({ key: 'LoadingScene' });
	}

	preload() {
		this.messageText = this.add.text(100, 100, '', { font: '64px Courier', fill: '#ffe28a' });

		this.setMessageText(this.loadingMessage);

		this.loadAssets();
	}

	create() {
		this.nextScene();
	}

	loadAssets() {
		this.load.image('mustang', '/test/mustang-gt/mustang-full.gif');
		this.load.image('rocks_1_set_2', '/test/env/PNG/game_background_2/layers/rocks_1.png');
		this.load.image('rocks_2_set_2', '/test/env/PNG/game_background_2/layers/rocks_2.png');
		this.load.image('rocks_3_set_2', '/test/env/PNG/game_background_2/layers/rocks_3.png');
	}

	setMessageText(text) {
		this.messageText.setText(text);
	}

	nextScene() {
		this.scene.start('MainScene');
	}
}
