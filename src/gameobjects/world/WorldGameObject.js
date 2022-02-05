import EventControl from '@eventcontrol/EventControl';
import MainCharacter from '@characters/MainCharacter';

import ControlFlow from './ControlFlow';

export default class WorldGameObject {
	constructor(scene) {
		this._scene = scene;
		this._eventControl = new EventControl();
		this._controlFlow = new ControlFlow();
		this._mainCharacter = new MainCharacter();
	}

	prepare() {
		this._mainCharacter.create(this._scene);
	}

	start() {
		this._controlFlow.setParent(this);

		this._controlFlow.start();
		this._mainCharacter.start();
	}

	notifyStateChange(newState) {
		this._signalStateTransition(this._currentState, newState);

		this._currentState = newState;
	}

	_signalStateTransition(oldState, newState) {
		this._eventControl.transitionToState(newState);
	}
}
