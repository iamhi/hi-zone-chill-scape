import * as Phaser from 'phaser';

export default class LoadingScene extends Phaser.Scene {
	loadingMessage = 'loading...';

	constructor() {
		super({ key: 'LoadingScene' });
	}

	create() {
		this.messageText = this.add.text(100, 100, '', { font: '64px Courier', fill: '#ffe28a' });

		this.setMessageText(this.loadingMessage);

		this.loadAssets();
	}

	loadAssets() {
		this.mockTimer = this.time.delayedCall(3000, () => this.mockTransition(), []);

		this.load.image('mustang', '/test/mustang-gt/mustang-full.gif');
	}

	mockTransition() {
		this.nextScene();
	}

	setMessageText(text) {
		this.messageText.setText(text);
	}

	nextScene() {
		this.scene.start('MainScene');
	}
}
