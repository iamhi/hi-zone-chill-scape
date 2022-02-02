import * as Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
	constructor() {
		super({ key: 'BootScene' });
	}

	create() {
		const text = this.add.text(100, 100, '', { font: '64px Courier', fill: '#ffe28a' });

		text.setText('Click to start...');

		this.input.on('pointerdown', () => {
			this.nextScene();
		});
	}

	nextScene() {
		this.scene.start('LoadingScene');
	}
}
