// Summon characters or environment that will act on it's own
export default class EventEmitter {
	getType() {

	}

	isStateCompatible(state) {

	}

	start(initial) {
		// starts generating timer
		// if initial then emit on start
		if (initial) {
			this.trigger();
		}
	}

	increase() {
		// transition in this state
		// increase frequency
	}

	decrease() {
		// transition out of this state
		// decrease frequency
	}

	notifyMovementChange(isMoving) {

	}

	stop() {
		// stops generating timer
	}

	dispose() {
		// stops timer
		// deletes all characters/environments
	}

	trigger() {
		// creates character/environment
	}
}
