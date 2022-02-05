import EventControl from '@eventcontrol/EventControl';
import MainCharacter from '@characters/MainCharacter';
import { Input } from 'phaser';

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

		this._createMovementAction();
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

	signalMovementChange() {
		this._eventControl.notifyMovementChange(this._mainCharacter.isMoving());
	}

	_signalStateTransition(oldState, newState) {
		this._eventControl.transitionToState(newState);
	}

	_createMovementAction() {
		this._movementKey = this._scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.W);

		this._movementKey.on('down', () => this._mainCharacter.toggleMovement());
	}
}
