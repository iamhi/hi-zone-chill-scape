import * as Phaser from 'phaser';

import WorldGameObject from '@world/WorldGameObject';

export default class MainScene extends Phaser.Scene {
	constructor() {
		super({ key: 'MainScene' });
	}

	preload() {
		this._world = new WorldGameObject(this);

		this._world.prepare();

		this._debugText();
	}

	_debugText() {
		const text = this.add.text(100, 100, '', { font: '64px Courier', fill: '#ffe28a' });

		text.setText('Gameplay');
	}

	create() {
		this._world.start();
	}
}
