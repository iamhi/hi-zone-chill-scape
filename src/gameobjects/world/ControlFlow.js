export default class ControlFlow {
	setParent(parent) {
		this._parent = parent;
	}

	start() {
		// begin controling the states
		this._generate();
		this._startTimers();
	}

	_generate() {
		// generate flow of states
	}

	_startTimers() {
		// start timers that will control the flow
		setTimeout(() => this._nextState(), [1000]);
	}

	_pickNextState() {
		return {
			characterEventTypes: [],
			environmentEventTypes: [],
		};
	}

	_nextState() {
		this._currentState = this._pickNextState();

		if (this._parent) {
			this._parent.notifyStateChange(this._currentState);
		}
	}
}
