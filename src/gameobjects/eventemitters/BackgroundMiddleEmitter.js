// Summon characters or environment that will act on it's own
// import BackgroundMiddleObject from '@environments/BackgroundMiddleObject';

export const EMITTER_TYPE = 'background-middle';
export const INTERVAL_TIME = 10000;
export const LOW_FREQUENCY = 0.10;
export const NORMAL_FREQUENCY = 0.20;

export default class EventEmitter {
	constructor() {
		this._frequency = 0;
		this._emitting = false;
		this._backgroundObjects = [];
		this._timer = undefined;
		this._frequency = -1;
	}

	static getType() {
		return EMITTER_TYPE;
	}

	getType() {
		return EMITTER_TYPE;
	}

	isStateCompatible(/* state */) {
		return true;
	}

	start(scene) {
		this._scene = scene;
		this._emitting = true;
		this._frequency = LOW_FREQUENCY;
		this._timer = setInterval(() => this.trigger(), INTERVAL_TIME);
	}

	increase() {
		this._frequency = NORMAL_FREQUENCY;
	}

	decrease() {
		this._frequency = LOW_FREQUENCY;
	}

	notifyMovementChange(isMoving) {
		this._backgroundObjects.forEach((background) => background.notifyMovementChange(isMoving));
	}

	stop() {
		if (this._timer) {
			clearInterval(this._timer);
			this._timer = undefined;
		}

		this._emitting = false;
		this._backgroundObjects.forEach((background) => background.stop());
	}

	dispose() {
		// stops timer
		// deletes all characters/environments
		if (this._timer) {
			clearInterval(this._timer);
		}

		this._backgroundObjects.forEach((background) => background.dispose());
		this._backgroundObjects = [];
		this._scene = undefined;
	}

	trigger() {
		console.warn('trigger attempt');
	}
}
