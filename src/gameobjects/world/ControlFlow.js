export class ControlFlow {

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
	}

	_pickNextState() {

	}

	_nextState() {
		this._currentState = this._pickNextState();

		if(this._parent) {
			this.notifyStateChange(this._currentState);
		}
	}
}
