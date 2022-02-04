import EventControl from '@eventcontrol/EventControl';

import ControlFlow from './ControlFlow';

export class WorldGameObject {

	constructor() {
		this._eventControl = new EventControl();
		this._controlFlow = new ControlFlow();
	}

	start() {
		this._controlFlow.setParent(this);

		this._controlFlow.start();
	}

	notifyStateChange(newState) {
		this._signalStateTransition(this._currentState, newState);

		this._currentState = newState;
	}

	_signalStateTransition(oldState, newState) {
		this._eventControl(newState);
	}
}
