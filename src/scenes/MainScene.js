import * as Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
	constructor() {
		super({ key: 'MainScene' });
	}

	create() {
		const text = this.add.text(100, 100, '', { font: '64px Courier', fill: '#ffe28a' });

		text.setText('Gameplay');
	}
}
