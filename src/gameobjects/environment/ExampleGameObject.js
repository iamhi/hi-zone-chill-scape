import EnvironmentGameObject from './EnvironmentGameObject';

export const OBJECT_TYPE = 'example-environment';

export default class ExampleGameObject extends EnvironmentGameObject {
	getType() {
		return OBJECT_TYPE;
	}

	create(scene) {
		this._scene = scene;
	}

	start() {

	}
}
