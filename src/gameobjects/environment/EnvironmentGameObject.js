// Has simple constant movement
// No interaction
export default class EnvironmentGameObject {
	create(scene) {
		this._scene = scene;
		this._isActive = false;
	}

	getType() {

	}

	start() {

	}

	isActive() {
		return this._isActive;
	}
}
