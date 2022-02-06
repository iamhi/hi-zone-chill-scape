import EnvironmentGameObject from './EnvironmentGameObject';

export const OBJECT_TYPE = 'background-middle-object';
export const SPRITE = 'rocks_2_set_2';
export const SPEED = 6000;
export const START_POSITION_X = 1080;
export const START_POSITION_Y = 150;

export default class BackgroundMiddleObject extends EnvironmentGameObject {
	constructor() {
		this._isActive = false;
		this._sprite = undefined;
		this._tween = undefined;
	}

	getType() {
		return OBJECT_TYPE;
	}

	create(scene) {
		this._scene = scene;
		this._sprite = this._scene.add.sprite(150, 150, SPRITE);
		this._tween = this._scene.tweens.add({
			targets: this._sprite,
			x: -1,
			duration: SPEED,
			onComplete: () => this.stop(),
		});
	}

	start() {
		this._isActive = true;
		this._tween.start();
	}

	stop() {
		this._isActive = false;
	}

	restart() {
		this._tween.restart();
	}

	dispose() {
		this._scene = undefined;

		this._tween.stop();
		this._tween.destroy();
		this._tween = undefined;

		this._sprite.destroy();
		this._sprite = undefined;
	}

	isActive() {
		return this._isActive;
	}
}
